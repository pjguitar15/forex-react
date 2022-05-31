import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

const MyNavbar = () => {
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
      {/* Brand: Bullish Beast */}
      {/* Logo Font: Raleway, Navlinks font: Montserrat */}
      <Navbar
        variant={`${navbar ? 'light' : 'dark'}`}
        className={`border-bottom border-muted fixed-top navbar-main ${
          navbar ? 'bg-white' : ''
        }`}
        // bg='light'
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
            className={`navbar-brand-style text-uppercase ${
              navbar ? 'text-dark' : 'text-white'
            }`}
          >
            Bullish Beast
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link
                className={`link-style montserrat mx-3  ${
                  navbar ? 'text-muted' : 'text-light'
                }`}
                to='/economic-calendar'
                // style={
                //   location.pathname === '/economic-calendar'
                //     ? {
                //         color: 'blue !important',
                //       }
                //     : { color: 'blue !important' }
                // }
              >
                <span
                  style={
                    (navbar && location.pathname) === '/economic-calendar'
                      ? { color: '#0090FF' }
                      : { color: '' }
                  }
                >
                  Economic Calendar
                </span>
              </Link>
              <Link
                className={`link-style montserrat mx-3 ${
                  navbar ? 'text-muted' : 'text-light'
                }`}
                to='/compounding-calculator'
              >
                <span
                  style={
                    (navbar && location.pathname) === '/compounding-calculator'
                      ? { color: '#0090FF' }
                      : { color: '' }
                  }
                >
                  Compounding Calculator
                </span>
              </Link>
              <Link
                className={`link-style montserrat mx-3 ${
                  navbar ? 'text-muted' : 'text-light'
                }`}
                to='/currency-converter'
              >
                Currency Converter
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar
