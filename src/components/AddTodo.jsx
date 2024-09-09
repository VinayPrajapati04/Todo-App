import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {

 const [TodoName, setTodoName]= useState("");
 const [dueDate, setDueDate]= useState("");

 const handleNameChange=(event)=>{

 setTodoName(event.target.value)

 }

 const handleDateChange=(event) => {
setDueDate(event.target.value)
 }

 const handleAddButtonClicked=()=> {
  onNewItem(TodoName, dueDate);
  setDueDate("");
  setTodoName("");
 }



  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={TodoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>
            <BiMessageAdd/>
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
