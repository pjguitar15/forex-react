import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const BlogNavbar = () => {
  const [navbar, setNavbar] = useState(false)

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
                Bullish Beast{' '}
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Link
                  className={`link-style montserrat mx-3`}
                  style={{ color: '#a8a8a8' }}
                  to='/live-market'
                >
                  Live Market
                </Link>
                <Link
                  className={`link-style montserrat mx-3`}
                  style={{ color: '#a8a8a8' }}
                  to='/economic-calendar'
                >
                  Economic Calendar
                </Link>
                <Link
                  className={`link-style montserrat mx-3`}
                  style={{ color: '#a8a8a8' }}
                  to='/currency-converter'
                >
                  <span
                    style={
                      location.pathname === '/currency-converter'
                        ? { color: 'white' }
                        : { color: '' }
                    }
                  >
                    Currency Converter
                  </span>
                </Link>
                <Link
                  className={`link-style montserrat mx-3`}
                  style={{ color: '#a8a8a8' }}
                  to='/compounding-calculator'
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
