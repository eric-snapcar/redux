import { combineReducers } from 'redux'
import todos from './todos'
import selectedFilter from './selectedFilter'

const todoApp = combineReducers({
  todoss : todos,
  selectedFilter : selectedFilter
})

export default todoApp
