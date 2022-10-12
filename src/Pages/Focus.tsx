import React from "react";
import { Props } from "../Types/types";

const Focus: React.FC<Props> = ({ tasks }) => {
  const task = tasks[0];

    return task ? <div>{ task.label}</div> : <div>No Task !</div>;
};

export default Focus;
