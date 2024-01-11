import React from 'react'

function CurrencyInput({
  label,
  amount,
  onAmountChange,
  selectCurrency="usd",
  currencyOption = [],
  onCurrencyChange
}) {
  return (
    <div className='flex flex-row gap-2'>
        <div className='flex flex-col'>
            <label >{label}</label>
            <input
              className='bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              type="number" 
              placeholder='Amount' 
              onChange={(e)=> onAmountChange && onAmountChange(e.target.value)} 
              value={amount} 
            />
        </div>
        <div className='flex flex-col'>
            <label >Currency Type</label>
            <select
              className='bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  
              onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} value={selectCurrency}>

                {currencyOption.map((currency)=>(
                  <option key={currency} value={currency} >{currency}</option>
                ))};

            </select>
        </div>
    </div>
  )
}

export default CurrencyInput