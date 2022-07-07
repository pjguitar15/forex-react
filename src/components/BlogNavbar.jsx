import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/bullishbeast-logo.png'
import MarketDropdown from './MarketDropdown'
import ToolsDropdown from './ToolsDropdown'

const BlogNavbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [isToggled, setIsToggled] = useState(false)
  const [isMobileMarketClicked, setIsMobileMarketClicked] = useState(false)
  const [isMobileToolsClicked, setIsMobileToolsClicked] = useState(false)
  const [isTokenAvailable, setIsTokenAvailable] = useState(false)

  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  // useLocation and useNavigate
  const location = useLocation()
  const navigate = useNavigate()

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
      <div>
        {/* Brand: Bullish Beast */}
        {/* Logo Font: Raleway, Navlinks font: Montserrat */}
        <Navbar
          variant='dark'
          className={`navbar-main bg-black`}
          // bg='light'
          expand='lg'
          expanded={isToggled}
          style={
            navbar || windowDimension.winWidth <= 992
              ? { padding: `16px`, height: isToggled ? '100vh' : '' }
              : {
                  padding: `30px`,
                }
          }
        >
          <Container>
            <div
              className={`d-flex justify-content-between ${
                windowDimension.winWidth <= 992 ? 'col-12' : ''
              }`}
            >
              <Navbar.Toggle
                onClick={() => setIsToggled(!isToggled)}
                className={`custom-toggler border-0 shadow-none`}
                aria-controls='basic-navbar-nav'
              />
              <div className='d-flex flex-reverse justify-content-between'>
                {/* on small device */}
                <Navbar.Brand
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/')}
                  className={`navbar-brand-style  text-uppercase text-white ${
                    windowDimension.winWidth <= 992 ? 'd-block' : 'd-none'
                  }`}
                >
                  <div className='d-flex align-items-center justify-content-center'>
                    <h6 className='text-light text-end fw-bold m-0 me-2'>
                      <div className='text-warning'>Bullish</div> Beast
                    </h6>
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
            {/* <div
              className={`${windowDimension.winWidth <= 992 ? 'w-100' : ''}`}
            >
              <div className='col-12'>
                <div
                  className={`d-flex justify-content-between col-12 ${
                    windowDimension.winWidth <= 992 ? 'd-block' : 'd-none'
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
                      windowDimension.winWidth <= 992 ? 'd-block' : 'd-none'
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
            </div> */}
            <Navbar.Brand
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
              className={`navbar-brand-style text-white ${
                windowDimension.winWidth <= 992 ? 'd-none' : 'd-block'
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
                <h6 className='text-light fw-bold m-0'>
                  <span className='text-warning'>Bullish</span> Beast
                </h6>
              </div>
            </Navbar.Brand>

            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <hr className='text-light' />
                <Link
                  onClick={() => setIsToggled(false)}
                  className={`link-style montserrat mx-3 text-white`}
                  to='/'
                  style={{ fontSize: '14px' }}
                >
                  Home
                </Link>
                <Link
                  onClick={() => setIsToggled(false)}
                  className={`link-style montserrat mx-3 text-white`}
                  to='/about'
                  style={{ fontSize: '14px' }}
                >
                  About
                </Link>
                <Link
                  onClick={() => setIsToggled(false)}
                  className={`link-style montserrat mx-3 text-white`}
                  to='/partnership'
                  style={{ fontSize: '14px' }}
                >
                  Our Partners
                </Link>
                <MarketDropdown
                  setIsMobileMarketClicked={setIsMobileMarketClicked}
                  isMobileMarketClicked={isMobileMarketClicked}
                  windowDimension={windowDimension}
                  setIsToggled={setIsToggled}
                />
                <ToolsDropdown
                  setIsMobileToolsClicked={setIsMobileToolsClicked}
                  isMobileToolsClicked={isMobileToolsClicked}
                  windowDimension={windowDimension}
                  setIsToggled={setIsToggled}
                />
                {/* {windowDimension.winWidth > 992 ? (
                  <Link
                    onClick={() => {
                      setIsToggled(false)
                    }}
                    className={`link-style montserrat mx-3 text-white`}
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
                ) : (
                  ''
                )} */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default BlogNavbar
