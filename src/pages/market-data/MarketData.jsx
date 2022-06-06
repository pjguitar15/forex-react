import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from '../home/Jumbotron'

const MarketData = () => {
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(!toggle)
  }, [])

  useEffect(() => {
    if (toggle === false) {
      const script = document.createElement('script')
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js'
      script.async = true
      script.innerHTML = JSON.stringify({
        width: '100%',
        height: 450,
        symbolsGroups: [
          {
            name: 'Indices',
            originalName: 'Indices',
            symbols: [
              {
                name: 'FOREXCOM:SPXUSD',
                displayName: 'S&P 500',
              },
              {
                name: 'FOREXCOM:NSXUSD',
                displayName: 'US 100',
              },
              {
                name: 'FOREXCOM:DJI',
                displayName: 'Dow 30',
              },
              {
                name: 'INDEX:NKY',
                displayName: 'Nikkei 225',
              },
              {
                name: 'INDEX:DEU40',
                displayName: 'DAX Index',
              },
              {
                name: 'FOREXCOM:UKXGBP',
                displayName: 'UK 100',
              },
            ],
          },
          {
            name: 'Futures',
            originalName: 'Futures',
            symbols: [
              {
                name: 'CME_MINI:ES1!',
                displayName: 'S&P 500',
              },
              {
                name: 'CME:6E1!',
                displayName: 'Euro',
              },
              {
                name: 'COMEX:GC1!',
                displayName: 'Gold',
              },
              {
                name: 'NYMEX:CL1!',
                displayName: 'Crude Oil',
              },
              {
                name: 'NYMEX:NG1!',
                displayName: 'Natural Gas',
              },
              {
                name: 'CBOT:ZC1!',
                displayName: 'Corn',
              },
            ],
          },
          {
            name: 'Bonds',
            originalName: 'Bonds',
            symbols: [
              {
                name: 'CME:GE1!',
                displayName: 'Eurodollar',
              },
              {
                name: 'CBOT:ZB1!',
                displayName: 'T-Bond',
              },
              {
                name: 'CBOT:UB1!',
                displayName: 'Ultra T-Bond',
              },
              {
                name: 'EUREX:FGBL1!',
                displayName: 'Euro Bund',
              },
              {
                name: 'EUREX:FBTP1!',
                displayName: 'Euro BTP',
              },
              {
                name: 'EUREX:FGBM1!',
                displayName: 'Euro BOBL',
              },
            ],
          },
          {
            name: 'Forex',
            originalName: 'Forex',
            symbols: [
              {
                name: 'FX:EURUSD',
                displayName: 'EUR/USD',
              },
              {
                name: 'FX:GBPUSD',
                displayName: 'GBP/USD',
              },
              {
                name: 'FX:USDJPY',
                displayName: 'USD/JPY',
              },
              {
                name: 'FX:USDCHF',
                displayName: 'USD/CHF',
              },
              {
                name: 'FX:AUDUSD',
                displayName: 'AUD/USD',
              },
              {
                name: 'FX:USDCAD',
                displayName: 'USD/CAD',
              },
            ],
          },
        ],
        showSymbolLogo: true,
        colorTheme: 'dark',
        isTransparent: false,
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

export default MarketData
