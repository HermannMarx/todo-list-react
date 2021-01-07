import "./App.css";
import ToDoList from "./ToDoList";
import { useState } from "react";
import NewTodoForm from "./NewTodoForm";

function App() {
  let [todos, setTodos] = useState([]);

  const updateTodo = (newToDo) => {
    setTodos([...todos, newToDo]);
  };

  const removeTask = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const markAsDone = (index) => {
    todos[index].done = todos[index].done ? false : true;
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <NewTodoForm setNewTodo={updateTodo} />
      <ToDoList
        todos={todos}
        setDeleteIndex={(index) => removeTask(index)}
        setCompleteIndex={(index) => markAsDone(index)}
      />
      <h1>THE</h1>
      <h1>AMAZING</h1>
      <h1>TO-DO-LIST</h1>
    </div>
  );
}

export default App;
