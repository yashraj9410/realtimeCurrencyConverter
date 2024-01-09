import { useState, useEffect } from 'react'

// cutom hook basic
let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => { setData(res[currency]) })
    }, [currency])
    return data;
}

// we have designed and exported a custom hook
export default useCurrencyInfo