import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from '../home/Jumbotron'

const Screener = () => {
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(!toggle)
  }, [])

  useEffect(() => {
    if (toggle === false) {
      const script = document.createElement('script')
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-screener.js '
      script.async = true
      script.innerHTML = JSON.stringify({
        width: '100%',
        height: 523,
        defaultColumn: 'overview',
        defaultScreen: 'general',
        market: 'forex',
        showToolbar: true,
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
        <Container>
          <div className='py-5 shadow'>
            <div className='tradingview-widget-container' ref={scriptRef}>
              <div className='tradingview-widget-container__widget'></div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Screener
