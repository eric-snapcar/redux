import { combineReducers } from 'redux'
import todos from './todos'
import selectedFilter from './selectedFilter'

const reducers =  {
  todoss : todos,
  selectedFilter : selectedFilter
}

const combinedReducers = combineReducers(reducers)

export {reducers,combinedReducers}
