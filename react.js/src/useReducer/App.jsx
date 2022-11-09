import React from 'react'
import {useReducer} from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

export const App = () => {

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    dispatch({ type: 'increment' })
  }

  function decrement() {
    dispatch({ type: 'decrement' })
  }

  return(
    <>
      <button onClick = {decrement}>-</button>
      <span>{state.count}</span>
      <button onClick = {increment}>+</button>
    </>
  )
}