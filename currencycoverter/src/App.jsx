import { useState } from 'react'
import { CurrencyInput } from './components'     // from the index file
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [result, setResult] = useState(0);

  const currencyInfo = useCurrencyInfo(from);  // it will hold the object of currency key = currency and value = conversion rate
  const options = Object.keys(currencyInfo);   // save all the key that are currency to pass to the options in the component

  // functionality for swap button
  const swapButton = () => {
    setFrom(to)
    setTo(from)
    setAmount(result)
    setResult(amount)
  }

  //conversion of amount
  const convertAmount = () => {
    setResult(amount * currencyInfo[to])
  }
  
  return (
    <>
      <div className='ml-10'>
        <form className='bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5 p-5 w-1/3 '
          onSubmit={(e) => {
          e.preventDefault();
          convertAmount();
          }}>
          <CurrencyInput
            label={"From"}
            amount={amount}
            currencyOption={options}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
          />
          <CurrencyInput
            className ="gap-5"
            label={"To"}
            amount={result}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            currencyOption={options}
          />
          <button
            className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' 
            type='submit'>Convert</button>
        </form>
        <button
          className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' 
          onClick={swapButton}>Swap Currencies</button>
      </div>
    </>
  )
}

export default App
