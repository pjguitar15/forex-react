import React, { useState, useEffect, useRef } from 'react'
import Jumbotron from '../home/Jumbotron'

const LiveMarket = () => {
  const [toggle, setToggle] = useState(true)
  const scriptRef = useRef()
  useEffect(() => {
    setToggle(!toggle)
  }, [])

  useEffect(() => {
    if (toggle === false) {
      const script = document.createElement('script')
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
      script.async = true
      /* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
      script.innerHTML = JSON.stringify({
        colorTheme: 'light',
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
            title: 'Commodities',
            symbols: [
              {
                s: 'MCX:GOLD1!',
              },
              {
                s: 'MCX:SILVER1!',
              },
              {
                s: 'MCX:COPPER1!',
              },
              {
                s: 'MCX:CRUDEOIL1!',
              },
              {
                s: 'MOEX:BR1!',
              },
              {
                s: 'MCX:NATURALGAS1!',
              },
              {
                s: 'ICEUS:KC1!',
              },
            ],
            originalTitle: 'Commodities',
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
            title: 'Crypto',
            symbols: [
              {
                s: 'BITSTAMP:BTCUSD',
              },
              {
                s: 'FTX:SHIBUSD',
              },
              {
                s: 'COINBASE:ETHUSD',
              },
              {
                s: 'BITFINEX:SANUSD',
              },
              {
                s: 'COINBASE:CROUSD',
              },
              {
                s: 'COINBASE:GALAUSD',
              },
              {
                s: 'BINANCE:DOGEUSD',
              },
            ],
          },
          {
            title: 'Stocks',
            symbols: [
              {
                s: 'NASDAQ:AAPL',
              },
              {
                s: 'NASDAQ:GOOGL',
              },
              {
                s: 'NASDAQ:TSLA',
              },
              {
                s: 'NASDAQ:AMZN',
              },
              {
                s: 'NASDAQ:NFLX',
              },
              {
                s: 'NASDAQ:FB',
              },
              {
                s: 'NYSE:BAC',
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
      <div className='row w-100 pt-3'>
        {/* Start of investing.com widget */}
        {/* <div className='col-12 col-md-auto mx-auto p-3'>
          <div className='mx-auto'>
            <iframe
              src='https://ssltsw.investing.com?lang=62&forex=1,2,3,5,7,9,10&commodities=8830,8836,8831,8849,8833,8862,8832&indices=23660,166,172,27,179,175,170&stocks=345,346,347,348,349,350,352&tabs=1,2,3,4'
              width='100%'
              height='467'
            ></iframe>
          </div>
          <div
            className='poweredBy'
            style={{
              fontFamily: 'arial,helvetica,sans-serif',
              direction: 'ltr',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                color: 'rgb(51, 51, 51)',
                textDecoration: 'none',
              }}
              data-darkreader-inline-color=''
            >
              Technical Summary Widget Powered by{' '}
              <a
                href='https://ph.investing.com/'
                rel='nofollow'
                target='_blank'
                style={{
                  fontSize: '11px',
                  color: 'rgb(6, 82, 157)',
                  fontWeight: 'bold',
                }}
                className='underline_link'
                data-darkreader-inline-color=''
              >
                Investing.com
              </a>
            </span>
          </div>
        </div> */}
        {/* End of Investing.com Widget */}

        {/* Start of Trading View Widget */}
        <div
          className='bg-light p-1 my-3 col-10 mx-auto'
          style={{ height: '40rem' }}
        >
          <div className='tradingview-widget-container' ref={scriptRef}>
            <div className='tradingview-widget-container__widget'></div>
          </div>
        </div>
        {/* End of trading view widget */}
      </div>
    </div>
  )
}

export default LiveMarket
