import React from 'react'
import PropTypes from 'prop-types'


class TodoCell extends React.Component  {
    // MARK : React.Component  override
    render(){
      const { onClick, completed, text } = this.props;
      return (
        <li
          onClick={onClick}
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
        >
          {text}
        </li>
      )
    }
}


export default TodoCell
