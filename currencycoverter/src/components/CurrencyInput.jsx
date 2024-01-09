import React from 'react'

function CurrencyInput() {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col'>
            <label >From</label>
            <input type="text" defaultValue={0} />
        </div>
        <div className='flex flex-col'>
            <label > Currency Type</label>
            <select name="Currency Type">
            </select>
        </div>
    </div>
  )
}

export default CurrencyInput