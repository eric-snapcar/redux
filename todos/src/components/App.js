import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoList_Filtered from '../containers/TodoList_Filtered'

const App = () => (
  <div>
    <AddTodo />
    <TodoList_Filtered />
    <Footer />
  </div>
)

export default App
