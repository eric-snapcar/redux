const reducers = (state = 0, action) => {
  switch (action.type) {
    case 'Plus':
      console.log('Plus');
      return state + 1
    case 'Minus':
      console.log('Minus');
      return state - 1
    default:
      return state
  }
}
export default reducers 
