import React from "react";
import ItemContext from "./itemContext";

const ItemState = (props) => {
  const state = {
    Item: [
        {description: 'this is an item',
        columId : 0,
        Id: 0
        }
    ]
  };

  return (
    <ItemContext.Provider value={state}>{props.children}</ItemContext.Provider>
  );
};

export default ItemState;
