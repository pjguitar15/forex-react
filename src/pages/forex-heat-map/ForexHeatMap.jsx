import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from '../home/Jumbotron'

const ForexHeatMap = () => {
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(!toggle)
  }, [])

  useEffect(() => {
    if (toggle === false) {
      const script = document.createElement('script')
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js'
      script.async = true
      script.innerHTML = JSON.stringify({
        width: '100%',
        height: 400,
        currencies: [
          'EUR',
          'USD',
          'JPY',
          'GBP',
          'CHF',
          'AUD',
          'CAD',
          'NZD',
          'CNY',
        ],
        isTransparent: true,
        colorTheme: 'dark',
        locale: 'en',
      })
      scriptRef.current.appendChild(script)
    }
  }, [toggle])
  return (
    <div>
      <Jumbotron />
      <div className='bg-dark'>
        <div className='py-5 col-lg-11 mx-auto'>
          <div className='tradingview-widget-container' ref={scriptRef}>
            <div className='tradingview-widget-container__widget'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForexHeatMap
