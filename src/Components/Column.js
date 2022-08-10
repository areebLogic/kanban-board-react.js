import Item from "./Item";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../styles/column.css";

const Column = (props) => {
  const { items, addItem } = useContext(GlobalContext);
  const [input, setInput] = useState("");


  const addTask = (e) => {
    if (input !== "") {
      const item = {
        text: input,
        columnId: Number(props.columnId),
      };
      addItem(item);
    }
  };

  return (
    <div id="column">
      <h1>{props.title}</h1>
      <div className="items-container">
        {items.map((item) => {
          if (item.columnId == props.columnId) {
            return <Item key={item.id} item={item}></Item>;
          } else {
            return "";
          }
        })}
      </div>
      <input
        className="input"
        type="text"
        placeholder="Task Description"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        className="add-task-btn"
        onClick={addTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default Column;
