import  { useState } from 'react'

function useCount(initial = 0, value) {
    const [count, setCount] = useState(initial)

    const increase = () => {
        setCount(c => c + value)
    }
    const decrease = () => {
        setCount(c => c - value)
    }
    const reset = () => {
        setCount(c => c = 0)
    }
  return [count,increase,decrease,reset]
}

export default useCount