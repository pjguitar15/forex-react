import React, { useState, useEffect, useRef } from 'react'
import Jumbotron from '../../pages/home/Jumbotron'

const RealTimeChart = () => {
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(!toggle)
  }, [])

  useEffect(() => {
    if (toggle === false) {
      const script = document.createElement('script')
      script.innerHTML = 'https://s3.tradingview.com/tv.js'
      script.async = true
      script.src = JSON.stringify(
        new window.TradingView.MediumWidget({
          autosize: true,
          symbol: 'NASDAQ:AAPL',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_f27bb',
        })
      )
      scriptRef.current.appendChild(script)
      console.log('test')
    }
  }, [toggle])
  return (
    <div>
      <Jumbotron />
      <div className='tradingview-widget-container' ref={scriptRef}>
        <div id='tradingview_f27bb'></div>
      </div>
    </div>
  )
}

export default RealTimeChart
