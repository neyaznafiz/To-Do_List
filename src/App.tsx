import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Focus from "./Pages/Focus";
import List from "./Pages/List";
import { Task } from "./Types/types";

function App() {
  let activeStyle = {
    fontWeight: "bold",
  };

  const [tasks, setTasks] = useState<Task[]>([]);

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const tasksApi = { tasks, setTasks, updateTaskCompletion };

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            List
          </NavLink>{" "}
          {""}- {""}
          <NavLink
            to="/focus"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Focus
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<List {...tasksApi} />} />
        <Route path="/focus" element={<Focus {...tasksApi} />} />
      </Routes>
    </div>
  );
}

export default App;
