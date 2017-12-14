import React from 'react'
import TodoCell from './TodoCell'

class TodoList extends React.Component  {
    // MARK : React.Component  override
    render(){
      return (
        <ul>
          {this.props.todos.map((todo, index) =>
            <TodoCell
              key={todo.id}
              {...todo}
              onClick={() => this.props.onTodoClick(todo.id)}
            />
          )}
        </ul>
      )
    }
}

export default TodoList
