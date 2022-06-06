import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from '../home/Jumbotron'

const FundamentalData = () => {
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(!toggle)
  }, [])

  useEffect(() => {
    if (toggle === false) {
      const script = document.createElement('script')
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-financials.js'
      script.async = true
      script.innerHTML = JSON.stringify({
        width: '100%',
        height: '500',
        colorTheme: 'dark',
        isTransparent: false,
        locale: 'en',
        importanceFilter: '-1,0,1',
      })
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
              <div className='tradingview-widget-container__widget'></div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default FundamentalData
