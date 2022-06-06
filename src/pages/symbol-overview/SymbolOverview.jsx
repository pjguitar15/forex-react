import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from '../home/Jumbotron'

const SymbolOverview = () => {
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(!toggle)
  }, [])

  useEffect(() => {
    if (toggle === false) {
      const script = document.createElement('script')
      script.src = 'https://s3.tradingview.com/tv.js'
      script.async = true
      script.innerHTML = JSON.stringify(new window.TradingView.MediumWidget({
        symbols: [
          ['Apple', 'AAPL|1D'],
          ['Google', 'GOOGL|1D'],
          ['Microsoft', 'MSFT|1D'],
        ],
        chartOnly: false,
        width: 1000,
        height: 500,
        locale: 'en',
        colorTheme: 'dark',
        isTransparent: false,
        autosize: false,
        showVolume: false,
        hideDateRanges: false,
        scalePosition: 'right',
        scaleMode: 'Normal',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif',
        noTimeScale: false,
        valuesTracking: '1',
        chartType: 'line',
        fontColor: '#787b86',
        gridLineColor: 'rgba(42, 46, 57, 0.06)',
        container_id: 'tradingview_3cdd4',
      }))
      scriptRef.current.appendChild(script)
    }
  }, [toggle])
  return (
    <div>
      <Jumbotron />
      <div className='bg-dark'>
        <Container>
          <div className='py-5'>
            <div className='tradingview-widget-container' ref={scriptRef}>
              <div id='tradingview_3cdd4'></div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SymbolOverview
