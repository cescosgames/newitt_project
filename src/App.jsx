import { useState } from 'react'
import Lane from './components/Lane'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <Lane />
      <Lane />
      <Lane />
      <Lane />
      <Lane />
    </div>
  )
}

export default App
