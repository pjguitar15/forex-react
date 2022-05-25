import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'

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
          className={`border-bottom navbar-main bg-white ${
            navbar ? 'fixed-top' : ''
          }`}
          // bg='light'
          expand='lg'
          style={navbar ? { padding: `16px` } : { padding: `30px` }}
        >
          <Container>
            <Navbar.Brand
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
              className={`navbar-brand-style text-dark text-uppercase`}
            >
              Bullish Beast
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Link
                  className={`link-style text-muted montserrat mx-3`}
                  to='/economic-calendar'
                >
                  Economic Calendar
                </Link>
                <Link
                  className={`link-style montserrat mx-3 text-muted`}
                  to='/compounding-calculator'
                >
                  Compounding Calculator
                </Link>
                <Link
                  className={`link-style montserrat mx-3 text-muted `}
                  to='/currency-converter'
                >
                  Currency Converter
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
