import React, { ChangeEvent, useState } from "react";

// type
type Props = {};

type Tasks = {
  label: string;
};

const List: React.FC<Props> = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [newTaskLabel, setNewTaskLabel] = useState("");

  const handleNewTasksLableChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input value={newTaskLabel} onChange={handleNewTasksLableChange} />
    </div>
  );
};

export default List;
