import React, { useState, useEffect, useRef } from 'react'
import LoadingDots from '../../components/LoadingDots'
import Jumbotron from '../home/Jumbotron'

const LiveMarket = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(!toggle)
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  useEffect(() => {
    if (toggle === false) {
      const script = document.createElement('script')
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
      script.async = true
      /* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
      script.innerHTML = JSON.stringify({
        colorTheme: 'dark',
        dateRange: '12M',
        showChart: true,
        locale: 'en',
        largeChartUrl: '',
        isTransparent: true,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        width: '100%',
        height: '100%',
        plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
        plotLineColorFalling: 'rgba(41, 98, 255, 1)',
        gridLineColor: 'rgba(240, 243, 250, 0)',
        scaleFontColor: 'rgba(120, 123, 134, 1)',
        belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
        belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
        belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
        belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
        symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
        tabs: [
          {
            title: 'Indices',
            symbols: [
              {
                s: 'FOREXCOM:SPXUSD',
                d: 'S&P 500',
              },
              {
                s: 'FOREXCOM:NSXUSD',
                d: 'US 100',
              },
              {
                s: 'FOREXCOM:DJI',
                d: 'Dow 30',
              },
              {
                s: 'INDEX:NKY',
                d: 'Nikkei 225',
              },
              {
                s: 'INDEX:DEU40',
                d: 'DAX Index',
              },
              {
                s: 'FOREXCOM:UKXGBP',
                d: 'UK 100',
              },
            ],
            originalTitle: 'Indices',
          },
          {
            title: 'Futures',
            symbols: [
              {
                s: 'CME_MINI:ES1!',
                d: 'S&P 500',
              },
              {
                s: 'CME:6E1!',
                d: 'Euro',
              },
              {
                s: 'COMEX:GC1!',
                d: 'Gold',
              },
              {
                s: 'NYMEX:CL1!',
                d: 'Crude Oil',
              },
              {
                s: 'NYMEX:NG1!',
                d: 'Natural Gas',
              },
              {
                s: 'CBOT:ZC1!',
                d: 'Corn',
              },
            ],
            originalTitle: 'Futures',
          },
          {
            title: 'Bonds',
            symbols: [
              {
                s: 'CME:GE1!',
                d: 'Eurodollar',
              },
              {
                s: 'CBOT:ZB1!',
                d: 'T-Bond',
              },
              {
                s: 'CBOT:UB1!',
                d: 'Ultra T-Bond',
              },
              {
                s: 'EUREX:FGBL1!',
                d: 'Euro Bund',
              },
              {
                s: 'EUREX:FBTP1!',
                d: 'Euro BTP',
              },
              {
                s: 'EUREX:FGBM1!',
                d: 'Euro BOBL',
              },
            ],
            originalTitle: 'Bonds',
          },
          {
            title: 'Forex',
            symbols: [
              {
                s: 'FX:EURUSD',
                d: 'EUR/USD',
              },
              {
                s: 'FX:GBPUSD',
                d: 'GBP/USD',
              },
              {
                s: 'FX:USDJPY',
                d: 'USD/JPY',
              },
              {
                s: 'FX:USDCHF',
                d: 'USD/CHF',
              },
              {
                s: 'FX:AUDUSD',
                d: 'AUD/USD',
              },
              {
                s: 'FX:USDCAD',
                d: 'USD/CAD',
              },
            ],
            originalTitle: 'Forex',
          },
          {
            title: 'Stocks',
            symbols: [
              {
                s: 'NASDAQ:AAPL',
              },
              {
                s: 'AMEX:SPY',
              },
              {
                s: 'NASDAQ:TSLA',
              },
              {
                s: 'NASDAQ:QQQ',
              },
              {
                s: 'NSE:RELIANCE',
              },
              {
                s: 'NASDAQ:AMZN',
              },
            ],
          },
          {
            title: 'Crypto',
            symbols: [
              {
                s: 'BINANCE:BTCUSDT',
              },
              {
                s: 'BITSTAMP:BTCUSD',
              },
              {
                s: 'COINBASE:BTCUSD',
              },
              {
                s: 'BINANCE:BTCUSDTPERP',
              },
              {
                s: 'BINANCE:ETHUSDT',
              },
              {
                s: 'BINANCE:SOLUSDT',
              },
            ],
          },
          {
            title: 'Economy',
            symbols: [
              {
                s: 'FRED:SP500',
              },
              {
                s: 'FRED:FEDFUNDS',
              },
              {
                s: 'ECONOMICS:USIRYY',
              },
              {
                s: 'ECONOMICS:USINTR',
              },
              {
                s: 'FRED:T10YIE',
              },
              {
                s: 'FRED:T10Y2Y',
              },
            ],
          },
        ],
      })
      scriptRef.current.appendChild(script)
    }
  }, [toggle])

  return (
    <div className='pb-5 live-market'>
      <Jumbotron />
      {/* <h3 className='raleway-700 mb-3 ms-md-5 mt-5 text-center text-lg-start text-light text-light'>
        Live Market
      </h3> */}
      {/* Start of Trading View Widget */}
      {isLoading ? <LoadingDots /> : ''}

      <div
        className={`${
          isLoading ? 'd-none' : 'd-block'
        } bg-dark p-1 my-3 col-lg-11 mx-auto rounded`}
        style={{ height: '40rem' }}
      >
        <div className='tradingview-widget-container' ref={scriptRef}>
          <div className='tradingview-widget-container__widget'></div>
        </div>
      </div>
      {/* End of trading view widget */}
    </div>
  )
}

export default LiveMarket
