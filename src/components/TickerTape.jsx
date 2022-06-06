import React, { useState, useEffect, useRef } from 'react'

const TickerTape = () => {
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(!toggle)
  }, [])
  useEffect(() => {
    if (toggle === false) {
      const script = document.createElement('script')
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
      script.async = true
      /* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            proName: 'FOREXCOM:SPXUSD',
            title: 'S&P 500',
          },
          {
            proName: 'FOREXCOM:NSXUSD',
            title: 'US 100',
          },
          {
            proName: 'FX_IDC:EURUSD',
            title: 'EUR/USD',
          },
          {
            proName: 'BITSTAMP:BTCUSD',
            title: 'Bitcoin',
          },
          {
            proName: 'BITSTAMP:ETHUSD',
            title: 'Ethereum',
          },
        ],
        showSymbolLogo: true,
        colorTheme: 'light',
        isTransparent: false,
        displayMode: 'adaptive',
        locale: 'en',
      })
      scriptRef.current.appendChild(script)
    }
  }, [toggle])
  return (
    <div className='py-3 bg-black'>
      <div ref={scriptRef} className='tradingview-widget-container'>
        <div className='tradingview-widget-container__widget'></div>
      </div>
    </div>
  )
}

export default TickerTape
