import React, { useState, useEffect, useRef } from 'react'
import Jumbotron from '../home/Jumbotron'
import CalendarItem from './CalendarItem'
import CalendarTableHeader from './CalendarTableHeader'
import ScriptTag from 'react-script-tag'
import { Spinner, Container } from 'react-bootstrap'
import LiveMarket from './LiveMarket'

// import context
import { useGetCalendarApi } from '../../context/EconomicCalendarProvider'

const EconomicCalendar = () => {
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(!toggle)
  }, [])

  useEffect(() => {
    if (toggle === false) {
      const script = document.createElement('script')
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-events.js'
      script.async = true
      script.innerHTML = JSON.stringify({
        width: '100%',
        height: '500',
        colorTheme: 'light',
        isTransparent: false,
        locale: 'en',
        importanceFilter: '-1,0,1',
      })
      scriptRef.current.appendChild(script)
    }
  }, [toggle])

  // context

  return (
    <div className='economic-calendar'>
      <Jumbotron />

      <div className='p-md-5 p-2'>
        <div className='tradingview-widget-container' ref={scriptRef}>
          <div className='tradingview-widget-container__widget'></div>
        </div>
      </div>
      <Container></Container>
    </div>
  )
}

export default EconomicCalendar
