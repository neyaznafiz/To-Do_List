import { shuffle } from "lodash";
import { nanoid } from "nanoid";
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
  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(
    undefined
  );

  const addTask = (task: Pick<Task, "label">) => {
    const id = nanoid()
    setTasks((tasks) => [...tasks,{
        id: id,
        label: task.label,
        isComplete: false,
      },
    ]);
    if (!focusedTaskId) {
      setFocusedTaskId(id)
    }
  };

  const updateTaskCompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const focusedTask = tasks.find((task) => task.id === focusedTaskId);

  const shuffleFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.isComplete))[0]?.id);
  };

  const tasksApi = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    shuffleFocusedTask,
    updateTaskCompletion,
  };

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
