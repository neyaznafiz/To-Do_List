import { nanoid } from "nanoid";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Props, Task, TasksProps } from "../Types/types";

const List: React.FC<Props> = ({ tasks, setTasks, updateTaskCompletion }) => {
  const [newTaskLabel, setNewTaskLabel] = useState("");

  // get value from input function
  const handleNewTasksLableChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };

  // add task with enter key
  const handleNewTakskKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTaskLabel !== "") {
      setTasks((tasks) => [
        ...tasks,
        {
          id: nanoid(),
          label: newTaskLabel,
          isComplete: false,
        },
      ]);
      setNewTaskLabel("");
    }
  };

  // conplete task change (radio click)
  const handleCompleteTaskChange =
    (task: Task) => (e: ChangeEvent<HTMLInputElement>) => {
      updateTaskCompletion(task.id, e.target.checked);
    };

  // clear complete task
  const handleCompleteTasksClear = () =>
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));

  // delete task
  const handleTaskDelete = (handledTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  // ----------------------------------------------------
  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={handleCompleteTaskChange(task)}
            />
            {task.label}
            <button onClick={handleTaskDelete(task)}>Delete</button>
          </div>
        ))}
      </div>

      <input
        value={newTaskLabel}
        onChange={handleNewTasksLableChange}
        onKeyUp={handleNewTakskKeyUp}
      />

      <div>
        <button onClick={handleCompleteTasksClear}>Clear Completed</button>
      </div>
    </div>
  );
};

export default List;
