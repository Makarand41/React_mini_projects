import React, { useState } from 'react'
export default function App() {

  const[count,SetCount]=useState(0)

const increase1=()=>{
    SetCount(count+1);
}

const decrease1=()=>{
  SetCount(count-1);
}

const reset1=()=>{
  SetCount(0);
}



  return (
<>

<h1>{count}</h1>
<br/>
<button onClick={increase1}>Increase</button>
<br/><br/>
<button onClick={decrease1}>Decrease</button>
<br/><br/>
<button onClick={reset1}>Reset</button>

</>
  )
}
