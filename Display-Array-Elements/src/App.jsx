import React from 'react';
import { data } from './data'; // adjust the path if needed

function App() {
  return (
    <div>
      <h2>FAQs</h2>


      {data.map((item) => (
        <div key={item.id} >
          <p>Q: {item.q}</p>
          <p>A: {item.ans}</p>
        </div>
      ))}


    </div>
  );
}

export default App;
