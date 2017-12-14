import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
const filter = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      console.log('ALL');
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const mapStateToProps = function(state){
  return {
  todos: filter(state.todoss, state.selectedFilter)
};}
const mapDispatchToProps = {
  onTodoClick: toggleTodo
}
const TodoList_Filtered = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoList_Filtered
