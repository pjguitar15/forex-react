import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const BlogNavbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [isToggled, setIsToggled] = useState(false)

  const [windowDimenion, detectHW] = useState({
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
  }, [windowDimenion])

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
      <div>
        {/* Brand: Bullish Beast */}
        {/* Logo Font: Raleway, Navlinks font: Montserrat */}
        <Navbar
          variant='dark'
          className={`navbar-main bg-black fixed-top`}
          // bg='light'
          expand='xl'
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
              <Nav onClick={() => setIsToggled(false)} className='ms-auto'>
                <Link
                  className={`link-style montserrat mx-3 text-white`}
                  to='/about'
                  style={
                    windowDimenion.winWidth < 1200
                      ? { fontSize: '12px' }
                      : { fontSize: '14px' }
                  }
                >
                  About
                </Link>
                <Link
                  className={`link-style montserrat mx-3 text-white`}
                  to='/live-market'
                  style={
                    windowDimenion.winWidth < 1200
                      ? { fontSize: '12px' }
                      : { fontSize: '14px' }
                  }
                >
                  Live Market
                </Link>
                <Link
                  className={`link-style montserrat mx-3 text-white`}
                  to='/economic-calendar'
                  style={
                    windowDimenion.winWidth < 1200
                      ? { fontSize: '12px' }
                      : { fontSize: '14px' }
                  }
                >
                  Economic Calendar
                </Link>
                <Link
                  className={`link-style montserrat mx-3 text-white`}
                  to='/currency-converter'
                  style={
                    windowDimenion.winWidth < 1200
                      ? { fontSize: '12px' }
                      : { fontSize: '14px' }
                  }
                >
                  Currency Converter
                </Link>
                <Link
                  className={`link-style montserrat mx-3 text-white`}
                  to='/compounding-calculator'
                  style={
                    windowDimenion.winWidth < 1200
                      ? { fontSize: '12px' }
                      : { fontSize: '14px' }
                  }
                >
                  Compounding Calculator
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default BlogNavbar
