import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const loadTodos = () => {
    axios
      .get("/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => alert("error while loading todos"));
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    const todo = {
      todo: e.target.todo.value,
      desc: e.target.desc.value,
      status: e.target.status.value,
    };
    console.log(todo);
    axios
      .post("/todos/create", todo)
      .then((res) => {
        console.log(res.data);
        loadTodos();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className='App'>
      <form className='form-container bg-light clearfix' onSubmit={addTodo}>
        <h1 className='text-center mb-4'>Add ToDo</h1>
        <div className='form-group'>
          <input
            required
            type='text'
            className='form-control'
            name='todo'
            placeholder='Todo'
          />
          <input
            required
            type='text'
            name='desc'
            className='form-control'
            placeholder='Description'
          />
          <select name='status' className='form-select'>
            <option value={true}>Completed</option>
            <option value={false}>NotCompleted</option>
          </select>
        </div>
        <input type='submit' className='btn btn-success m-1' value='Add' />
      </form>
      <div className='todos-list'>
        {todos.map((todo) => {
          return <Todo key={todo.id} data={todo} />;
        })}
      </div>
    </div>
  );
}

export default App;
