import React, { createContext, useReducer } from "react";
import itemsReducer from "./itemsReduces";

const initialState = {
  currentId: 3,
  items: [
    {
      text: "Show Kanban board to Team Lead",
      columnId: 0,
      id: 0,
    },
    {
      text: "Discuss resources for Node.js",
      columnId: 0,
      id: 1,
    },
    {
      text: "Complete React basics and advanced topics",
      columnId: 1,
      id: 2,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(itemsReducer, initialState);

  //Actions.

  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      newItem: item,
    });
  };

  const updateItem = (item) => {
    dispatch({
      type: "UPDATE_ITEM",
      item: item,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        addItem,
        updateItem,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
