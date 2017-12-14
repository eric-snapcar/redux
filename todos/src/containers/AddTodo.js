import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
class AddTodo extends React.Component  {
    // MARK: private
    onSubmit_(e){
      e.preventDefault()
      if (!this.input.value.trim()) {
        return
      }
      this.props.onSubmit(this.input.value);
      this.input.value = ''
    }
    // MARK: React.Component override
    constructor(props){
        super(props);
        this.onSubmit_ = this.onSubmit_.bind(this);
    }
    render(){
      return (
        <div>
            <form onSubmit={this.onSubmit_}>
            <input ref={node => {
              this.input = node
            }} />
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>
      )
    }
}
const mapDispatchToProps = function(dispatch, props) {
  const onSubmit_ = function(text){
    dispatch(addTodo(text));
  }
  return {
    onSubmit: onSubmit_
  }
}
AddTodo = connect(null,mapDispatchToProps)(AddTodo)
export default AddTodo
