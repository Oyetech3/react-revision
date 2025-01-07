import React, {useState} from 'react'

function Testfunc({brand}) {
    const [color, setColor] = useState("red")
    const changeColor = () => {
        setColor("blue")
    }
  return (
    <div>
        <p>My color is {color}</p>
        <p>The brand of my car is {brand}</p>
        <button onClick={changeColor}>Change color</button>
    </div>
  )
}

export default Testfunc