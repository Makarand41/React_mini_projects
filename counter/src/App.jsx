import React, { useState } from 'react'
export default function App() {

  const[count,SetCount]=useState(0)

const increase1=()=>{
    SetCount(count+1);
}

const decrease1=()=>{
  SetCount(count-1);
}



  return (
<>
<button onClick={increase1}>Click me to Increase</button>

<button onClick={decrease1}>Click me to decrease</button>

<h1>{count}</h1>
</>
  )
}
