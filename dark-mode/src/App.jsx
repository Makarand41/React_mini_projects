import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const fun1 = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      
         <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1> 
        <button onClick={fun1}>Click me</button>
      
    </div>
  );
}

export default App;

