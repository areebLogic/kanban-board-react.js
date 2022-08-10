const itemsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      action.newItem.id = state.currentId + 1;
      const updatedItems = [...state.items, action.newItem];
      return {
        ...state,
        currentId: state.currentId + 1,
        items: updatedItems,
      };
    }

    case "UPDATE_ITEM": {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const updatedItem = state.items[itemIndex];
      updatedItem.columnId = action.item.columnId;

      const updatedItems = state.items;
      updatedItems[itemIndex] = updatedItem;
      console.log(updatedItem);
      return {
        ...state,
        items: updatedItems,
      };
    }

    default: {
      return state;
    }
  }
};

export default itemsReducer;
