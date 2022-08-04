import React, {useReducer, createContext} from "react";
import ItemContext from "./itemContext"; 
import ItemsReducer from "./itemsReducer"


const initialState = {
  currentId: 3,
  items: [
    {
      text: "abcd",
      columnId: 0,
      id: 0,
    },
    {
      text: "efgh",
      columnId: 0,
      id: 1,
    },
    {
      text: "igkl",
      columnId: 1,
      id: 2,
    },
  ],
};

const ItemContext = createContext(initialState);

const ItemState = (props) => {

  const[state, dispatch] = useReducer(itemsReducer, initialState);

  const addItem= ()=>{
    dispatch({
      type: "ADD_ITEM",
      item: item
    })

  }

  const updateItem= ()=>{
    dispatch({
      type: "UPDATE_ITEM",
      item: item
    })
  }

  return (
    <ItemContext.Provider value={{state.items,
      addItem,
      updateItem
    }}>
      {props.children}
      </ItemContext.Provider>
  );
};

export default ItemState;
