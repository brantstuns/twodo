export function updatedTodoItemDoneState(itemToUpdate) {
  return {
    type: 'TOGGLE_ITEM_DONE',
    itemToUpdate
  };
}