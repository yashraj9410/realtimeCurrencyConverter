import { useState } from 'react'
import {CurrencyInput} from './components'     // from the index file
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const [result,setResult] = useState(0);

  const currencyInfo = useCurrencyInfo(from);  // it will hold the object of currency key = currency and value = conversion rate
  const options = Object.keys(currencyInfo);   // save all the key that are currency to pass to the options in the component

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
