import React, { memo } from 'react'

function Button({handleClick, children}) {
    console.log("Rendering button")
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default memo(Button)