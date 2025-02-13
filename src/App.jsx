import { useState } from 'react'
import Lane from './components/Lane'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lane />
    </>
  )
}

export default App
