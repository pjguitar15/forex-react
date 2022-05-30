import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import forexBg from '../../assets/forex.jpg'

const Jumbotron = () => {
  const location = useLocation()
  return (
    <div
      className='my-jumbotron'
      style={
        location.pathname === '/compounding-calculator'
          ? {
              background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://res.cloudinary.com/philcob/image/upload/v1653550133/card-img_zlfruh.jpg')`,
            }
          : {
              background: `url(${forexBg})`,
            }
      }
    >
      <Container>
        {location.pathname === '/' ? (
          <>
            <p className='text-center jumbotron-content'>
              Bullish Beast Ltd has ceased trading, investors please contact RES
              Corporate Services Limited,
            </p>
            <p className='text-center jumbotron-content'>
              Email: digby@rescorporate.co.nz Website: www.rescorporate.co.nz
            </p>
          </>
        ) : (
          ''
        )}
        {location.pathname === '/economic-calendar' ? (
          <>
            <h1 className='text-center raleway-700 text-white'>
              Forex Economic Calendar
            </h1>
            <p className='raleway-400-italic text-white text-center'>
              Forex Economic Calendar
            </p>
          </>
        ) : (
          ''
        )}
        {location.pathname === '/compounding-calculator' ? (
          <>
            <h1 className='text-center raleway-700 text-white'>
              Forex Compounding Calculator
            </h1>
            <p className='raleway-400-italic text-white text-center'>
              Forex Compounding Interest Calculator
            </p>
          </>
        ) : (
          ''
        )}
      </Container>
    </div>
  )
}

export default Jumbotron
