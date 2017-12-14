import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component  {
    // MARK : React.Component  override
    render(){
      return (
        <ul>
          {this.props.todos.map(todo =>
            <Todo
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
