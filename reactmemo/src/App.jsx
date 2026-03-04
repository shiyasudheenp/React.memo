
import React, { useState } from 'react'
import User from './User'

function App() {
  const[count,setCount]=useState(0)
  
  
  return (
    <div>
      <User name="shiyas"/>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>ADD</button>
    </div>
  )
}

export default App