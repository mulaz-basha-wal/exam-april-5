import React from "react";

export default function Todo(props) {
  const todo = props.data;
  return (
    <div className='bg-light todo-container'>
      <h3 className='todo'>{todo.todo}</h3>
      <h6 className='status'>{todo.status ? "Completed" : "Not Completed"}</h6>
      <p className='desc'>{todo.description}</p>
    </div>
  );
}
