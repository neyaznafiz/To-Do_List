import React from "react";
import { Props } from "../Types/types";

const Focus: React.FC<Props> = ({
  focusedTask: task,
  shuffleFocusedTask,
  updateTaskCompletion,
}) => {
  const handleMarkCompleted = () => {
    if (task) {
      updateTaskCompletion(task.id, true);
    }
  };


  return task ? (
    <div>
      <div>{task.label}</div>

      <button onClick={handleMarkCompleted}>Mark Completed</button>

      <button onClick={shuffleFocusedTask}>nope</button>
    </div>
  ) : (
    <div>No Incomplete Task !</div>
  );
};

export default Focus;
