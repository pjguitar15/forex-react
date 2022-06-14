import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import logo from '../assets/logo.jpg'
import '../styles.css'

const MyNavbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [isToggled, setIsToggled] = useState(false)
  const [isMobileMarketClicked, setIsMobileMarketClicked] = useState(false)
  const [isTokenAvailable, setIsTokenAvailable] = useState(false)
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

  // useLocation and useNavigate
  const location = useLocation()
  const navigate = useNavigate()

  // scrolls back to top when location is changed
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  // change background to white when passed 300 axis Y up
  const scrollListener = () => {
    if (window.scrollY >= 250) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollListener)

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      setIsTokenAvailable(true)
    } else {
      setIsTokenAvailable(false)
    }
  }, [location])
  return (
    <div>
      <Navbar
        variant={`${
          navbar || windowDimension.winWidth < 992 ? 'dark' : 'dark'
        }`}
        className={`fixed-top ${
          navbar || !(windowDimension.winWidth < 992) ? 'fixed-top' : ''
        } navbar-main ${
          navbar || windowDimension.winWidth < 992 ? 'bg-black' : ''
        }`}
        expand='lg'
        expanded={isToggled}
        style={
          navbar || windowDimension.winWidth < 992
            ? {
                padding: `16px`,
                height:
                  isToggled && windowDimension.winWidth < 992 ? '100vh' : '',
              }
            : {
                padding: `30px`,
              }
        }
      >
        <Container>
          <div
            className={`d-flex justify-content-between ${
              windowDimension.winWidth < 992 ? 'col-12' : ''
            }`}
          >
            <Navbar.Toggle
              onClick={() => setIsToggled(!isToggled)}
              className={`custom-toggler border-0 shadow-none ${
                windowDimension.winWidth < 992 && !isToggled
                  ? 'd-block'
                  : 'd-none'
              }`}
              aria-controls='basic-navbar-nav'
            />
            <div className='d-flex flex-reverse justify-content-between'>
              {/* on small device */}
              <Navbar.Brand
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
                className={`navbar-brand-style  text-uppercase text-white ${
                  windowDimension.winWidth < 992 ? 'd-block' : 'd-none'
                } ${isToggled ? 'd-none' : 'd-block'}`}
              >
                <div className='d-flex align-items-center justify-content-center'>
                  <div style={{ height: '50px' }}>
                    <img
                      src={logo}
                      alt='logo'
                      className='w-100 h-100 rounded'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </Navbar.Brand>
            </div>
          </div>
          <div className={`${windowDimension.winWidth < 992 ? 'w-100' : ''}`}>
            <div className='col-12'>
              <div
                className={`d-flex justify-content-between col-12 ${
                  windowDimension.winWidth < 992 ? 'd-block' : 'd-none'
                } ${!isToggled ? 'd-none' : 'd-block'}`}
              >
                <div
                  onClick={() => setIsToggled(false)}
                  className='text-white'
                  style={{ cursor: 'pointer' }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    fill='white'
                    className='bi bi-x-lg me-2'
                    viewBox='0 0 16 16'
                  >
                    <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
                  </svg>
                </div>
                <Link
                  onClick={() => {
                    setIsToggled(false)
                  }}
                  className={`link-style montserrat mx-3 text-white ms-auto ${
                    windowDimension.winWidth < 992 ? 'd-block' : 'd-none'
                  }`}
                  to='/login'
                  style={{ fontSize: '14px' }}
                >
                  {isTokenAvailable ? (
                    'Investment Portfolios'
                  ) : (
                    <span
                      style={
                        location.pathname === '/login'
                          ? { color: 'white' }
                          : { color: '' }
                      }
                    >
                      <i
                        className='bi bi-person-fill me-1'
                        style={{ fontSize: '16px' }}
                      ></i>{' '}
                      Login/Register
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
          <Navbar.Brand
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
            className={`navbar-brand-style text-uppercase text-white ${
              windowDimension.winWidth < 992 ? 'd-none' : 'd-block'
            }`}
          >
            <div className='d-flex align-items-center justify-content-center'>
              <div className='me-3' style={{ height: '50px' }}>
                <img
                  src={logo}
                  alt='logo'
                  className='w-100 h-100 rounded'
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </Navbar.Brand>

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <hr className='text-light' />
              <Link
                onClick={() => setIsToggled(false)}
                className={`${
                  windowDimension.winWidth < 992 ? 'd-block' : 'd-none'
                } link-style montserrat mx-3 text-white`}
                to='/'
                style={{ fontSize: '14px' }}
              >
                Home
              </Link>
              <Link
                onClick={() => setIsToggled(false)}
                className={`link-style montserrat mx-3 text-white`}
                to='/partnership'
                style={{ fontSize: '14px' }}
              >
                Our Partners
              </Link>
              {/* <Link
                onClick={() => setIsToggled(false)}
                className={`link-style montserrat mx-3 text-white`}
                to='/about'
                style={{ fontSize: '14px' }}
              >
                About
              </Link> */}
              <div
                className='parent-dropdown'
                style={{ position: 'relative', display: 'inline-block' }}
              >
                <div
                  onClick={() =>
                    setIsMobileMarketClicked(!isMobileMarketClicked)
                  }
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
                    {/* <div
                      onClick={() => navigate('/real-time-chart')}
                      className='py-2 my-sub-menu px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Real Time Chart
                    </div> */}
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
                    {/* <div
                      onClick={() => navigate('/symbol-overview')}
                      className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Symbol Overview
                    </div> */}

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

              <Link
                onClick={() => setIsToggled(false)}
                className={`link-style montserrat mx-3 text-white`}
                to='/currency-converter'
                style={{ fontSize: '14px' }}
              >
                Currency Converter
              </Link>
              <Link
                onClick={() => setIsToggled(false)}
                className={`link-style montserrat mx-3 text-white`}
                to='/compounding-calculator'
                style={{ fontSize: '14px' }}
              >
                <span
                  style={
                    location.pathname === '/compounding-calculator'
                      ? { color: 'white' }
                      : { color: '' }
                  }
                >
                  Compounding Calculator
                </span>
              </Link>
              <Link
                onClick={() => {
                  setIsToggled(false)
                }}
                className={`link-style montserrat mx-3 text-white ${
                  windowDimension.winWidth < 992 ? 'd-none' : 'd-block'
                }`}
                to='/login'
                style={{ fontSize: '14px' }}
              >
                {isTokenAvailable ? (
                  'Investment Portfolios'
                ) : (
                  <span
                    style={
                      location.pathname === '/login'
                        ? { color: 'white' }
                        : { color: '' }
                    }
                  >
                    <i
                      className='bi bi-person-fill me-1'
                      style={{ fontSize: '16px' }}
                    ></i>{' '}
                    Login/Register
                  </span>
                )}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar
