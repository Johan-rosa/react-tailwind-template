import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-lg tex-indigo-500 text-center'>This is a Vite + React + Tailwind App!</h1>
    </>
  )
}

export default App
