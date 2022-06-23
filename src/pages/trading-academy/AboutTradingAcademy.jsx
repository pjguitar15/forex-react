import React from 'react'
import { Container } from 'react-bootstrap'
import aboutImg from '../../assets/trading-academy-about-section.jpg'

const AboutTradingAcademy = () => {
  return (
    <div className='text-light py-5'>
      {/* row */}
      <Container>
        <div className='row'>
          <div className='col-md-6'>
            <div>
              <img className='w-100' src={aboutImg} alt='about' />
            </div>
          </div>
          <div className='col-md-6 rubik-400 mt-4 mt-md-0'>
            <h3 className='mb-4'>Why learn how to trade with us?</h3>
            <p style={{ lineHeight: '35px' }}>
              Our academy is one of the best services that Bullish Beast is
              providing. This service has been started with a motive to create a
              wealth of day traders and Technical Awareness among the people who
              are not aware of the beauty of Technical Analysis.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutTradingAcademy
