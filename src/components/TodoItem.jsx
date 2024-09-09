import { RiDeleteBinLine } from "react-icons/ri";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
