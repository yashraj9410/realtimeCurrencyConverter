import { useState } from 'react'
import {CurrencyInput} from './components'     // from the index file
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const [result,setResult] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

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
