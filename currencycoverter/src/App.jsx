import { useState } from 'react'
import CurrencyInput from './components/CurrencyInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CurrencyInput val ={"From"} />
        <CurrencyInput val = {"To"} />
      </div>
    </>
  )
}

export default App
