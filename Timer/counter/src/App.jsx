import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function decreaseCount () {
    if (count == 0) return;
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  )

}

export default App
