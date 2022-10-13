import React from "react";
import { Props } from "../Types/types";

const Focus: React.FC<Props> = ({ tasks, updateTaskCompletion }) => {
  const task = tasks.filter((task)=>!task.isComplete)[0];

  const handleMarkCompleted = () => {
    updateTaskCompletion(task.id, true)
  }

  return task ? (
    <div>
      <div>{task.label}</div>
      <button onClick={handleMarkCompleted}>Mark Completed</button>
    </div>
  ) : (
    <div>No Incomplete Task !</div>
  );
};

export default Focus;
