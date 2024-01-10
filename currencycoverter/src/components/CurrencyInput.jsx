import React from 'react'

function CurrencyInput({
  label,
  amount,
  onAmountChange,
  currencyOption = [],
  onCurrencyChange
}) {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col'>
            <label >{label}</label>
            <input type="number" placeholder='Amount' onChange={(e)=> onAmountChange && onAmountChange(e.target.value)} value={amount} />
        </div>
        <div className='flex flex-col'>
            <label >Currency Type</label>
            <select name="Currency Type" onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}>
                {currencyOption.map((currency)=>{
                  <option value={currency} key={currency}>{currency}</option>
                })}
            </select>
        </div>
    </div>
  )
}

export default CurrencyInput