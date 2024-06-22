import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-300 test-black p-2 rounded-xl'>Tailwind test</h1>
      <Card  username="Yashika"/>
      <Card username={"Riya"}
      />
    </>
  )
}

export default App
