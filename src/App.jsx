import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={setCount(1)}>llevas {count} Clicks</button>
    </>
  )
}

export default App