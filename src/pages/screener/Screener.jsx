import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import LoadingDots from '../../components/LoadingDots'
import Jumbotron from '../home/Jumbotron'

const Screener = () => {
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(false)
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
        isTransparent: true,
      })
      scriptRef.current.appendChild(script)
    }
  }, [toggle])
  return (
    <div>
      <Jumbotron />
      <div className='bg-dark'>
        <div className={`py-5 shadow col-lg-11 mx-auto`}>
          <div className='tradingview-widget-container' ref={scriptRef}>
            <div className='tradingview-widget-container__widget'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Screener
