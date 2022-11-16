import React from "react";
import Card from "./components/Card";
import TodoForm from "./components/TodoForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  let parsedTodos=JSON.parse(localStorage.getItem("todos"));
  let initialTodo=parsedTodos || []
  const [todoList, setTodoList] = React.useState(initialTodo);

  return (
    <>
    <ToastContainer/>
      <div className="container">
        <div className="row  vh-100 align-items-center d-flex justify-content-between">
          <div className="col-6">
            <h1>Todo Form</h1>
            <TodoForm todoList={todoList} setTodoList={setTodoList} />
          </div>
          <div className="col-6">
            {todoList.map((object,index) =>(

              <Card  todoList={todoList} setTodoList={setTodoList} key={index} todo={object} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
