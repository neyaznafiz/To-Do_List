import { nanoid } from "nanoid";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";

// type
type Props = {};

type Task = {
  id: string;
  label: string;
  isComplete: boolean;
};

const List: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState("");

  //
  const handleNewTasksLableChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };

  //
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
    }
  };

  //
  const handleCompleteChange =
    (handleTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === handleTask.id)
            return { ...task, isComplete: e.target.checked };
          return task;
        })
      );
    };

  const handleClearClick = () =>
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={handleCompleteChange(task)}
            />
            {task.label}
          </div>
        ))}
      </div>

      <input
        value={newTaskLabel}
        onChange={handleNewTasksLableChange}
        onKeyUp={handleNewTakskKeyUp}
      />

      <div>
        <button onClick={handleClearClick}>Clear Completed</button>
      </div>
    </div>
  );
};

export default List;
