const defaultState = {
  todoItems: [
    { id: 1, value: 'pay some bills', done: false },
    { id: 2, value: 'do some work', done: false }
  ]
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case 'TOGGLE_ITEM_DONE':
      const updatedItemsArray =
        state.todoItems.map(item =>
          item.id === action.itemToUpdate ? { ...item, done: !item.done } : item);
      return { ...state, todoItems: updatedItemsArray };
    default:
      return state;
  }
}