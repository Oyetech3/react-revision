import React from 'react'
import {createStore} from 'redux'
import {connect, useDispatch, useSelector} from 'react-redux'

//action
const buyCake = () => {
  return {
    type: "BUY_CAKE"
  }
}
//reducer
const initialState = {
  numOfcakes : 10
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "BUY_CAKE": 
      return {
        numOfcakes: state.numOfcakes - 1
      }
    default: return state
  }
}

export const store = createStore(reducer)

function Testfunc() {

  const numOfCakes = useSelector(state => state.numOfcakes)
  const dispatch = useDispatch()

  return (
      <div>
        <p>Number Of Cakes: {numOfCakes}</p>
        <button onClick={() => dispatch(buyCake())}>Get a cake</button>
      </div>
  )
}



export default Testfunc