import LocaleStorageService from '../service/LocaleStorageService';

let currentToDoId = LocaleStorageService.getCurrentToDoId();



export const addTodo = function(text){
  currentToDoId++
  LocaleStorageService.setCurrentToDoId(currentToDoId)
  return {
    type: 'ADD_TODO',
    id: currentToDoId,
    text
  }
}

export const setselectedFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
