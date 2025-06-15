import { useState } from "react"

const App = () => {

  const [count, setCount]=useState(0);

  const increase =()=>  setCount(count+1);

  const decrease =()=> {
    if (count>0){
    setCount(count-1);
    }
    else{
      setCount(0);
    }
  }

  const reset=()=>  setCount(0);

  return (
    <>
      <p>{count}</p>

    <button onClick={increase}>Increase</button>
    <br/><br/>

   <button onClick={decrease} disabled={count === 0}>Decrease</button>

    <br/><br/>
    <button onClick={reset}>Reset</button>
    
    </>
  )
}

export default App
