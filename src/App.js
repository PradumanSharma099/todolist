import "./styles.css";
import React, { useState } from "react";
import Todolist from "./Component/Todolist";

export default function App() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [todolist, setTodolist] = useState([]);

  const addtask = () => {
    setTodolist([...todolist, { task: taskName, time: time }]);
    setTaskName("");
    setTime("");
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <label htmlFor="">Task Name :</label>
      <br />
      <input
        type="text"
        name=""
        id="name"
        placeholder="Enter your task"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="">Task Time : </label>
      <br />
      <input
        type="text"
        id="time"
        placeholder="Enter the completion time"
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <br />
      <br />
      <button type="submit" onClick={addtask}>
        Add Task
      </button>
      {todolist.map((task) => {
        return <Todolist taskName={task.task} time={task.time} />;
      })}
    </div>
  );
}
