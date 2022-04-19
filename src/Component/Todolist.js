import React from "react";

function Todolist({ taskName, time }) {
  return (
    <>
      <h4>your task is {taskName}</h4>
      <h4>completion time {time}</h4>
    </>
  );
}

export default Todolist;
