import React, {useState} from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Focus from "./Pages/Focus";
import List from "./Pages/List";
import { Task } from "./Types/types";

function App() {
  let activeStyle = {
    fontWeight: "bold",
  };

  const [tasks, setTasks] = useState<Task[]>([]);
  const tasksProps = {tasks, setTasks}

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
        <Route path="/" element={<List {...tasksProps} />} />
        <Route path="/focus" element={<Focus {...tasksProps} />} />
      </Routes>
    </div>
  );
}

export default App;
