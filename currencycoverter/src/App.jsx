import { useState } from 'react'
import CurrencyInput from './components/CurrencyInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CurrencyInput />
    </>
  )
}

export default App
