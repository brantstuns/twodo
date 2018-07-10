const defaultState = {
  todoItems: [
    { value: 'pay some bills', done: false },
    { value: 'do some work', done: false }
  ]
};

export default function(state = defaultState, action) {
  switch(action.type) {
    default:
      return state;
  }
}