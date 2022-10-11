import { nanoid } from "nanoid";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";

// type
type Props = {};

type Tasks = {
  id: string;
  label: string;
};

const List: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState("");

  const handleNewTasksLableChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
    console.log(e.target.value);
  };

  const handleNewTakskKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTasks((tasks) => [...tasks, { id: nanoid(), label: newTaskLabel }]);
    }
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>

      <input
        value={newTaskLabel}
        onChange={handleNewTasksLableChange}
        onKeyUp={handleNewTakskKeyUp}
      />
    </div>
  );
};

export default List;
