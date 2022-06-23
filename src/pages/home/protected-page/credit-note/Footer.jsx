import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='credit-note-card-head text-light'>
        <div>
          <div>[Company Name], 123 Anytown, Anyville, United States, 12345</div>
          <div>[Company Phone] [Company Email] [Company Tax Number]</div>
        </div>
        <div>
          <div>
            Subscription billing to{' '}
            <span className='fw-bold'>Bullish Beast</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
