import React, { useState } from 'react'
import { data } from './data'

const App = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (index) => {
    setOpenIndex(openIndex=== index ? null : index)
  }

  return (
    <>
      {data.map((item, index) => (
        <div key={item.id}>
          <p onClick={() => handleClick(index)}> Q: {item.q} </p>
          
          {openIndex === index && <p>A: {item.ans}</p>}
          
          <br/>
        </div>
      ))}
    </>
  )
}

export default App
