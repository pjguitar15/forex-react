import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/logo.jpg'
import '../styles.css'

const MyNavbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [isToggled, setIsToggled] = useState(false)
  const [isMobileMarketClicked, setIsMobileMarketClicked] = useState(false)
  const [windowDimenion, detectHW] = useState({
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
  }, [windowDimenion])

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
  return (
    <div>
      {/* Brand: Bullish Beast */}
      {/* Logo Font: Raleway, Navlinks font: Montserrat */}
      <Navbar
        variant={`${navbar || windowDimenion.winWidth < 990 ? 'dark' : 'dark'}`}
        className={`fixed-top ${
          navbar || !(windowDimenion.winWidth < 990) ? 'fixed-top' : ''
        } navbar-main ${
          navbar || windowDimenion.winWidth < 990 ? 'bg-black' : ''
        }`}
        expand='lg'
        expanded={isToggled}
        style={
          navbar || windowDimenion.winWidth < 990
            ? { padding: `16px`, height: isToggled ? '100vh' : '' }
            : {
                padding: `30px`,
              }
        }
      >
        <Container>
          <div>
            <Navbar.Toggle
              onClick={() => setIsToggled(!isToggled)}
              className={`custom-toggler border-0 shadow-none ${
                windowDimenion.winWidth < 990 && !isToggled
                  ? 'd-block'
                  : 'd-none'
              }`}
              aria-controls='basic-navbar-nav'
            />
          </div>
          <div className='me-auto'>
            <div
              className={`${
                windowDimenion.winWidth < 990 ? 'd-block' : 'd-none'
              } ${!isToggled ? 'd-none' : 'd-block'}`}
            >
              <div
                onClick={() => setIsToggled(false)}
                className='text-white'
                style={{ cursor: 'pointer' }}
              >
                ✖
              </div>
            </div>
            <hr className='text-light' />
          </div>
          <Navbar.Brand
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
            className={`navbar-brand-style text-uppercase text-white ${
              windowDimenion.winWidth < 990 ? 'd-none' : 'd-block'
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
          <div className='d-flex flex-reverse justify-content-between'>
            {/* on small device */}
            <Navbar.Brand
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
              className={`navbar-brand-style  text-uppercase text-white ${
                windowDimenion.winWidth < 990 ? 'd-block' : 'd-none'
              } ${isToggled ? 'd-none' : 'd-block'}`}
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
          </div>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link
                onClick={() => setIsToggled(false)}
                className={`link-style montserrat mx-3 text-white`}
                to='/about'
                style={{ fontSize: '14px' }}
              >
                About
              </Link>
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
                {windowDimenion.winWidth >= 990 ? (
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
                      className='py-2 my-sub-menu px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Real Time Chart
                    </div>
                    <div
                      className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Screener
                    </div>
                    <div
                      className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Cryptocurrency Market
                    </div>
                    <div
                      className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Fundamental Data
                    </div>
                  </div>
                ) : (
                  // MOBILE VIEW
                  <div
                    className='my-dropdown-mb rounded'
                    style={{
                      width: '15rem',
                      display: isMobileMarketClicked ? 'block' : 'none',
                    }}
                  >
                    <div
                      onClick={() => {
                        navigate('/live-market')
                        setIsToggled(false)
                      }}
                      className='py-2 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Live Market
                    </div>
                    <div
                      className='py-2 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Real Time Chart
                    </div>
                    <div
                      className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Screener
                    </div>
                    <div
                      className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Cryptocurrency Market
                    </div>
                    <div
                      className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
                      style={{ cursor: 'pointer' }}
                    >
                      Fundamental Data
                    </div>
                  </div>
                )}
              </div>
              <Link
                onClick={() => setIsToggled(false)}
                className={`link-style montserrat mx-3 text-white`}
                to='/economic-calendar'
                style={{ fontSize: '14px' }}
              >
                Economic Calendar
              </Link>

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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar
