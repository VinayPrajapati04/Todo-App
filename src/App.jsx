import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItems from "./components/TodoItems";
import Description from "./components/Description";
import { HiOutlineLightBulb } from "react-icons/hi";
import "./App.css";
import { useState, useContext} from "react";


function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };



  return (
    <>
      <center className="todo-container">
      
       
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </>
  );
}

export default App;
