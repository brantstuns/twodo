export function updatedTodoItemDoneState(itemToUpdate) {
  return {
    type: 'TOGGLE_ITEM_DONE',
    itemToUpdate
  };
}

export function addNewTodoItem() {
  return {
    type: 'ADD_NEW_TODO_ITEM'
  };
}