import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import forexBg from '../../assets/forex.jpg'
import economicCalendarBg from '../../assets/economic-calendar-bg.jpg'
import liveMarketBg from '../../assets/live-market-bg.jpg'
import screenerBg from '../../assets/screener-bg.jpg'
import cryptoBg from '../../assets/cryptocurrency-bg.jpg'
import fundamentalBg from '../../assets/fundamental-bg.jpg'
import marketDataBg from '../../assets/market-data-bg.jpg'
import stockMarketBg from '../../assets/stock-market-bg.jpg'
import forexCrossRateBg from '../../assets/forex-cross-rate-bg.jpg'
import forexHeatMapBg from '../../assets/forex-heat-map-bg.jpg'

const Jumbotron = () => {
  const [bgImage, setBgImage] = useState('')
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/compounding-calculator':
        // code block
        setBgImage(
          'https://res.cloudinary.com/philcob/image/upload/v1653550133/card-img_zlfruh.jpg'
        )
        break
      case '/':
        // code block
        setBgImage(forexBg)
        break
      case '/economic-calendar':
        // code block
        setBgImage(economicCalendarBg)
        break
      case '/live-market':
        // code block
        setBgImage(liveMarketBg)
        break
      case '/screener':
        // code block
        setBgImage(screenerBg)
        break
      case '/cryptocurrency-market':
        // code block
        setBgImage(cryptoBg)
        break
      case '/fundamental-data':
        // code block
        setBgImage(fundamentalBg)
        break
      case '/market-data':
        // code block
        setBgImage(marketDataBg)
        break
      case '/stock-market':
        // code block
        setBgImage(stockMarketBg)
        break
      case '/forex-cross-rates':
        // code block
        setBgImage(forexCrossRateBg)
        break
      case '/forex-heat-map':
        // code block
        setBgImage(forexHeatMapBg)
        break
      default:
      // code block
    }
  }, [])
  return (
    <>
      <div
        className='my-jumbotron'
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
          height:
            windowDimension.winWidth < 990 && location.pathname === '/'
              ? `80vh`
              : '65vh',
        }}
      >
        <Container>
          {location.pathname === '/' ? (
            <div>
              <p className='text-center jumbotron-content'>
                Bullish Beast has broken the code in trading, investors please
                contact (RFIT) Rocket Financial Investment Traders,
              </p>
              <p className='text-center jumbotron-content'>
                Email: info@bullishbeast.co.za Website: www.bullishbeast.co.za
              </p>
            </div>
          ) : (
            ''
          )}
          {location.pathname === '/economic-calendar' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Forex Economic Calendar
              </h1>
            </>
          ) : (
            ''
          )}
          {location.pathname === '/compounding-calculator' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Forex Compounding Calculator
              </h1>
            </>
          ) : (
            ''
          )}

          {location.pathname === '/live-market' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Live Market
              </h1>
            </>
          ) : (
            ''
          )}

          {location.pathname === '/real-time-chart' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Real Time Chart
              </h1>
            </>
          ) : (
            ''
          )}

          {location.pathname === '/screener' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>Screener</h1>
            </>
          ) : (
            ''
          )}

          {location.pathname === '/cryptocurrency-market' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Cryptocurrency Market
              </h1>
            </>
          ) : (
            ''
          )}

          {location.pathname === '/fundamental-data' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Fundamental Data
              </h1>
            </>
          ) : (
            ''
          )}

          {location.pathname === '/market-data' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Market Data
              </h1>
            </>
          ) : (
            ''
          )}
          {location.pathname === '/stock-market' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Stock Market
              </h1>
            </>
          ) : (
            ''
          )}

          {location.pathname === '/symbol-overview' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Symbol Overview
              </h1>
            </>
          ) : (
            ''
          )}

          {location.pathname === '/forex-cross-rates' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Forex Cross Rates
              </h1>
            </>
          ) : (
            ''
          )}

          {location.pathname === '/forex-heat-map' ? (
            <>
              <h1 className='text-center raleway-700 text-white'>
                Forex Heat Map
              </h1>
            </>
          ) : (
            ''
          )}
        </Container>
      </div>
      <div
        className='col-12 gradient-line'
        style={{ height: '5px', display: 'block !important' }}
      ></div>
    </>
  )
}

export default Jumbotron
