import React from 'react'
import { useNavigate } from 'react-router-dom'

const MarketDropdown = ({
  setIsMobileMarketClicked,
  isMobileMarketClicked,
  windowDimension,
  setIsToggled,
}) => {
  const navigate = useNavigate()
  return (
    <div
      className='parent-dropdown'
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <div
        onClick={() => setIsMobileMarketClicked(!isMobileMarketClicked)}
        className={`link-style live-market-link montserrat mx-3 text-white`}
        style={{
          fontSize: '14px',
          zIndex: '1',
          cursor: 'pointer',
          transition: 'all 0.3 ease-in-out',
        }}
      >
        Market <i className='ms-1 bi bi-chevron-down'></i>
      </div>
      {/* Dropdown menu here only show on medium device */}
      {windowDimension.winWidth >= 992 ? (
        <div
          className='my-dropdown rounded'
          style={{
            width: '15rem',
          }}
        >
          <div
            onClick={() => navigate('/live-market')}
            className='py-2 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Live Market
          </div>
          <div
            onClick={() => navigate('/screener')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Screener
          </div>
          <div
            onClick={() => navigate('/economic-calendar')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Economic Calendar
          </div>
          <div
            onClick={() => navigate('/cryptocurrency-market')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Cryptocurrency Market
          </div>
          <div
            onClick={() => navigate('/fundamental-data')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Fundamental Data
          </div>
          <div
            onClick={() => navigate('/market-data')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Market Data
          </div>
          <div
            onClick={() => navigate('/stock-market')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Stock Market
          </div>
          <div
            onClick={() => navigate('/forex-cross-rates')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Forex Cross Rates
          </div>

          <div
            onClick={() => navigate('/forex-heat-map')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Forex Heat Map
          </div>
        </div>
      ) : (
        // MOBILE VIEW
        <div
          className={`my-dropdown-mb rounded`}
          style={{
            width: '15rem',
            display: isMobileMarketClicked ? 'block' : 'none',
          }}
        >
          <div
            onClick={() => {
              navigate('/live-market')
              setIsToggled(false)
              setIsMobileMarketClicked(false)
            }}
            className='py-2 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Live Market
          </div>
          {/* <div
                      onClick={() => {
                        navigate('/real-time-chart')
                        setIsToggled(false)
                        setIsMobileMarketClicked(false)
                      }}
                      className='py-2 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Real Time Chart
                    </div> */}
          <div
            onClick={() => {
              navigate('/screener')
              setIsToggled(false)
              setIsMobileMarketClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Screener
          </div>{' '}
          <div
            onClick={() => {
              navigate('/economic-calendar')
              setIsToggled(false)
              setIsMobileMarketClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Economic Calendar
          </div>
          <div
            onClick={() => {
              navigate('/cryptocurrency-market')
              setIsToggled(false)
              setIsMobileMarketClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Cryptocurrency Market
          </div>
          <div
            onClick={() => {
              navigate('/fundamental-data')
              setIsToggled(false)
              setIsMobileMarketClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Fundamental Data
          </div>
          <div
            onClick={() => {
              navigate('/market-data')
              setIsToggled(false)
              setIsMobileMarketClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Market Data
          </div>
          <div
            onClick={() => {
              navigate('/stock-market')
              setIsToggled(false)
              setIsMobileMarketClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Stock Market
          </div>
          {/* <div
                      onClick={() => {
                        navigate('/symbol-overview')
                        setIsToggled(false)
                        setIsMobileMarketClicked(false)
                      }}
                      className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Symbol Overview
                    </div> */}
          <div
            onClick={() => {
              navigate('/forex-cross-rates')
              setIsToggled(false)
              setIsMobileMarketClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Forex Cross Rates
          </div>
          <div
            onClick={() => {
              navigate('/forex-heat-map')
              setIsToggled(false)
              setIsMobileMarketClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Forex Heat Map
          </div>
        </div>
      )}
    </div>
  )
}

export default MarketDropdown
