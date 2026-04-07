import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    // Increase the count by 1
    
    setCount(count + 1);
    
  }

  function handleDecrease() {
    // Decrease the count by 1
    
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}> Increase</button>
      <button onClick={handleDecrease}> Decrease</button>
    </div>
  )
}

export default App
  