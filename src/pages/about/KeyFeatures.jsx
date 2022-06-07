import React from 'react'
import { Container } from 'react-bootstrap'
import KeyFeatureRow from './KeyFeatureRow'

const KeyFeatures = () => {
  return (
    <div className='bg-dark p-5'>
      <div>
        <p
          className='text-light text-center raleway-400'
          style={{ letterSpacing: '5px' }}
        >
          KEY FEATURES OF
        </p>
        <h2 className='text-light text-center raleway-700'>Bullish Beast</h2>
      </div>
      <hr className='text-light col-md-7 mx-auto my-3' />
      {/* tri col */}
      <KeyFeatureRow />
    </div>
  )
}

export default KeyFeatures
