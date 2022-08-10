import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../styles/item.css";

const Item = (props) => {
  const { updateItem } = useContext(GlobalContext);

  const next = () => {
    let item = props.item;
    item.columnId = item.columnId == 2 ? 0 : item.columnId + 1;
    updateItem(item);
  };
  const prev = () => {
    let item = props.item;
    item.columnId = item.columnId == 0 ? 2 : item.columnId - 1;
    updateItem(item);
  };

  return (
    <div id="item">
      {props.item.text}
      <div className="btn-container">
        <button onClick={prev}>⬅️</button>
        <button onClick={next}>➡️</button>
      </div>
    </div>
  );
};

export default Item;
