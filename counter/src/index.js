import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import reducers from './reducers/reducers.js'

const store = createStore(reducers)

const render = function(){ ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'Plus' })}
    onDecrement={() => store.dispatch({ type: 'Minus' })}
  />,document.getElementById('root'))
}

render()
store.subscribe(render)
