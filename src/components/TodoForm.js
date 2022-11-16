import React from "react";
import { toast } from "react-toastify";
const TodoForm = ({ todoList, setTodoList }) => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [todoText, setTodoText] = React.useState("");

  const handleTodo = (e) => {
    e.preventDefault();

    if (todoTitle) {
      let newTodo = {
        todoTitle: todoTitle,
        todoText: todoText,
      };
      setTodoList([...todoList, newTodo]);
      let parsedTodos = JSON.parse(localStorage.getItem("todos"));
      if (parsedTodos && parsedTodos.length > 0) {
        let allTodos = [...parsedTodos, newTodo];
        localStorage.setItem("todos", JSON.stringify(allTodos));
      } else {
        localStorage.setItem("todos", JSON.stringify([newTodo]));
      }

      setTodoTitle("");
      setTodoText("");
    } else {
      toast.warn("fill the todo");
    }
  };

  return (
    <form>
      <input
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
        className="form-control p-3 m-2"
        type="text"
        placeHolder="type the title"
        value={todoTitle}
      />
      <input
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        className="form-control p-3 m-2"
        type="text"
        placeHolder="type the text"
        value={todoText}
      />
      <button onClick={handleTodo} className="btn btn-primary">
        create
      </button>
    </form>
  );
};

export default TodoForm;
