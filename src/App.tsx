import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Focus from "./Pages/Focus";
import List from "./Pages/List";
import useState from 'react';

function App() {
  let activeStyle = {
    fontWeight: "bold",
  };

  // const [tasks, setTasks] = useState<Task[]>([]);

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
        <Route path="/" element={<List />} />
        <Route path="/focus" element={<Focus />} />
      </Routes>
    </div>
  );
}

export default App;
