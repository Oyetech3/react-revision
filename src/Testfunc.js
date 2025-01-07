import React, {useState} from 'react'
import Todos from './Todos'

function Testfunc() {
    const [count, setCount] = useState(0)
    const [todo, setTodos] = useState(["Todo 1", "Todo 2"])
  return (
    <div>
      <Todos todos={todo} />
      <hr/>
      <p>My count {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase Count</button>
    </div>
  )
}

export default Testfunc