import React from 'react'
import Footer from './Footer'
import AddForm from '../containers/AddForm'
import TodoList_Filtered from '../containers/TodoList_Filtered'

const App = () => (
  <div>
    <AddForm />
    <TodoList_Filtered />
    <Footer />
  </div>
)

export default App
