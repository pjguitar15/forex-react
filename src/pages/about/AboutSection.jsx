import React, { useEffect, useState } from 'react'
// assets
import sa from '../../assets/sa.jpg'
import sa2 from '../../assets/sa2.jpg'

const AboutSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000)
  }, [])
  return (
    <div className='d-flex bg-black align-items-center justify-content-center px-5 py-5'>
      <div
        className='row'
        style={{ paddingTop: '150px', paddingBottom: '100px' }}
      >
        <div className='col-md-5'>
          <div>
            <img
              // effect='blur'
              className={`w-100 h-100 ${isLoaded ? 'd-block' : 'd-none'}`}
              src={sa}
              alt='about'
            />
            <img
              src={sa2}
              className={`w-100 h-100 blurred ${
                isLoaded ? 'd-none' : 'd-block'
              }`}
              alt='blurred'
            />
          </div>
        </div>
        <div className='col-md-7 px-md-5 mt-4 mt-md-0'>
          <h6 className='text-start' style={{ color: '#b1976b' }}>
            OVERVIEW
          </h6>
          <h2 className='text-light text-start raleway-600'>
            About Bullishbeast
          </h2>
          <p
            className='text-light text-start mx-auto raleway-400'
            style={{
              textAlign: 'justify',
              lineHeight: '30px',
              whiteSpace: 'pre-wrap',
            }}
          >
            <div className='fw-bold' style={{ color: '#c9c9c9' }}>
              Bullishbeast is a respected, black-owned and managed private
              equity fund based in Cape Town, South Africa. It focuses on
              investments that drive sustainable development and has a
              demonstrable track record of growth and investment returns.
            </div>
            <div className='mt-3' style={{ color: '#c9c9c9' }}>
              Under the leadership of exceptional financial professionals, the
              company has built a strong and diversified investment portfolio
              across a range of sectors. In little over a decade, Bullishbeast
              has built a substantial asset base invested in mid-market
              companies with growth potential and has become a leading 21st
              Century African investment firm.
            </div>
            <div className='mt-3' style={{ color: '#c9c9c9' }}>
              Bullishbeast was founded on a vision of spearheading meaningful
              transformation and shaping an empowered future for the citizens of
              South Africa. It has made sizeable investments in opportunities to
              drive positive change in South Africa’s socio-economic
              environment.1
            </div>
          </p>
        </div>
      </div>{' '}
    </div>
  )
}

export default AboutSection
