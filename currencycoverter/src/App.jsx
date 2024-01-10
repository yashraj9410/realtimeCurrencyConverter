import { useState } from 'react'
import CurrencyInput from './components/CurrencyInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CurrencyInput label={"From"}  />
        <CurrencyInput label={"To"} />
      </div>
    </>
  )
}

export default App
