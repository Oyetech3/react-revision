import React, {useEffect,  useState} from 'react'
import axios from "axios"


function Testfunc() {
  const [data, setData] = useState(null)

    useEffect(() => {
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.data)
      .then(data => setData(data))
    },[])
  return (
    <div>
      {
        data && data.map((data,key) => (
          <p key={key.id}>{data.title}</p>
        ))
      }
    </div>
  )
}

export default Testfunc