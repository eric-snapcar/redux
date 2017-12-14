import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import { PersistGate } from 'redux-persist/es/integration/react'
import { reducers , combinedReducers } from './reducers'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native


/*
const config = {
  key: 'root',
  storage,
}
const reducer = persistCombineReducers(config, reducers)
let store = createStore(reducer)
let persistor = persistStore(store)
*/

function getStore(){
  return createStore(combinedReducers);
}
function getStorePersist(){
  const config = {
    storage: storage,
    key: 'root'
  }
  const reducer = persistCombineReducers(config, reducers)
  let store = createStore(reducer)
  let persistor = persistStore(store)
  return [store, persistor];
}
const [store, persistor] = getStorePersist();
render(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
)
