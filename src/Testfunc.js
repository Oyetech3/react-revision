import React from 'react'
import useInput from './useInput'



function Testfunc() {

  const [firstname, bindFirstName, resetFirstName] = useInput('')
  const [lastname, bindLastName, resetLastName] = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Submitted ${firstname} ${lastname}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Firstname: <input type='text' value={firstname} onChange={bindFirstName} /><br/>
        Lastname: <input type='text' value={lastname} onChange={bindLastName}/><br/>
        <input type='submit' value={'Submit'} />
      </form>
    </div>
  )
}



export default Testfunc