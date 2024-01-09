import React from 'react'

function CurrencyInput(props) {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col'>
            <label >{props.val}</label>
            <input type="text" placeholder='Amount' />
        </div>
        <div className='flex flex-col'>
            <label >Currency Type</label>
            <select name="Currency Type">
                <option value="usd">usd</option>
            </select>
        </div>
    </div>
  )
}

export default CurrencyInput