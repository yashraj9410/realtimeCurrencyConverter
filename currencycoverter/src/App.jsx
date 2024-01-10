import { useState } from 'react'
import {CurrencyInput} from './components'     // from the index file
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [result,setResult] = useState(0);

  const currencyInfo = useCurrencyInfo(from);  // it will hold the object of currency key = currency and value = conversion rate
  const options = Object.keys(currencyInfo);   // save all the key that are currency to pass to the options in the component

  // functionality for swap button
  const swapButton = ()=> {
    setFrom(to)
    setTo(from)
    setResult(result)
    setAmount(amount)
  }

  //conversion of amount
  const convertAmount = () => {
    setResult(amount * setAmount(currencyInfo(to)))
  }

  return (
    <>
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          convertAmount();
        }}>
          <CurrencyInput label={"From"} currencyOption={options} selectCurrency={from} onAmountChange={(amount) => setAmount(amount)} onCurrencyChange={(currency)=>setFrom(currency)}  />
          <CurrencyInput label={"To"} onCurrencyChange={(currency)=>setTo(currency)} selectCurrency={to} currencyOption={options} />
        </form>
        <button onClick={swapButton}>swap</button>
      </div>
    </>
  )
}

export default App
