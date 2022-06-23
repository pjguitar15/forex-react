import React from 'react'

const Description = () => {
  return (
    <div className='my-4 rubik-400'>
      {/* Description Header */}
      <div
        className='border d-flex justify-content-between p-3'
        style={{ color: 'orange' }}
      >
        <h6 className='m-0 p-0'>Description</h6>
        <h6 className='m-0 p-0'>Amount (USD)</h6>
      </div>
      <div className='border d-flex justify-content-between px-3 py-2'>
        <div className='m-0 p-0'>Refund of customerID-xxxxx</div>
        <div className='m-0 p-0'>-$10.00</div>
      </div>
    </div>
  )
}

export default Description
