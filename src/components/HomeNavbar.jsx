import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/logo.jpg'

const MyNavbar = () => {
  const [navbar, setNavbar] = useState(false)
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
        className={`${
          navbar || !(windowDimenion.winWidth < 990) ? 'fixed-top' : ''
        } navbar-main ${
          navbar || windowDimenion.winWidth < 990 ? 'bg-black' : ''
        }`}
        expand='lg'
        style={
          navbar
            ? { padding: `16px` }
            : {
                padding: `30px`,
              }
        }
      >
        <Container>
          <Navbar.Brand
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
            className={`navbar-brand-style text-uppercase text-white`}
          >
            <div className='d-flex align-items-center justify-content-center'>
              <div className='me-3' style={{ height: '40px' }}>
                <img
                  src={logo}
                  alt='logo'
                  className='w-100 h-100 rounded'
                  style={{ objectFit: 'cover' }}
                />
              </div>
              Bullish Beast
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            className='custom-toggler'
            aria-controls='basic-navbar-nav'
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link
                className={`link-style montserrat mx-3 text-white`}
                to='/live-market'
              >
                Live Market
              </Link>
              <Link
                className={`link-style montserrat mx-3 text-white`}
                to='/economic-calendar'
                // style={
                //   location.pathname === '/economic-calendar'
                //     ? {
                //         color: 'blue !important',
                //       }
                //     : { color: 'blue !important' }
                // }
              >
                Economic Calendar
              </Link>

              <Link
                className={`link-style montserrat mx-3 text-white`}
                to='/currency-converter'
              >
                Currency Converter
              </Link>
              <Link
                className={`link-style montserrat mx-3 text-white`}
                to='/compounding-calculator'
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
