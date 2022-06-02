import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const BlogNavbar = () => {
  const [navbar, setNavbar] = useState(false)
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
          className={`navbar-main bg-black ${navbar ? 'fixed-top' : ''}`}
          // bg='light'
          expand='lg'
          style={navbar ? { padding: `16px` } : { padding: `30px` }}
        >
          <Container>
            <Navbar.Brand
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
              className={`navbar-brand-style text-white text-uppercase`}
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
                {windowDimenion.winWidth < 990 ? (
                  <span className='fw-bold' style={{ fontSize: '14px' }}>
                    Bullish Beast (Pty) Ltd
                  </span>
                ) : (
                  <div>
                    <div className='fw-bold' style={{ fontSize: '16px' }}>
                      Bullish Beast
                    </div>
                    <div className='fw-bold' style={{ fontSize: '16px' }}>
                      (Pty) Ltd
                    </div>
                  </div>
                )}
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
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
