import React, { useState } from 'react';
import { data } from './data';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (index) => {
    // setCurrentIndex(currentIndex === index ? null : index)

    // OR
    if (currentIndex === index) {
      setCurrentIndex(null); // close if already open
    } else {
      setCurrentIndex(index); // open the clicked one
    }
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={item.id}>
          <p onClick={() => handleClick(index)}>Q: {item.q}</p>

          {currentIndex === index && <p>A: {item.ans}</p>}

          <br />
        </div>
      ))}
    </>
  );
};

export default App;
