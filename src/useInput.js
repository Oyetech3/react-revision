import  { useState } from 'react'

function useInput(initialValue) {
    const [value,setValue] = useState(initialValue)

    const reset = () => {
        setValue(initialValue)
    }
    const changeValue = (e) => {
        setValue(e.target.value)
    }
  return [value,changeValue,reset]
}

export default useInput