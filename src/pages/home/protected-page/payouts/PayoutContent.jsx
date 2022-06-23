import React from 'react'
import StatusComponents from './StatusComponents'

const PayoutContent = () => {
  return (
    <>
      <div className='border bg-white p-3' style={{ color: '#f88b0f' }}>
        <h6 className='m-0 p-0'>Payouts</h6>
      </div>
      <div className='bg-white text-dark p-4'>
        {/* Upcoming */}
        <div>
          <h6 className='raleway-700'>Upcoming</h6>
          <StatusComponents
            status='Pending'
            estimatedDate='June 18, 2022'
            type='bank'
            payoutAmount={594.0}
          />
        </div>
        {/* In Transit */}
        <div className='my-5'>
          <h6 className='raleway-700'>In Transit</h6>
          <StatusComponents
            status='Sent'
            estimatedDate='June 18, 2022'
            type='bank'
            payoutAmount={594.0}
          />
        </div>
        {/* Completed */}
        <div className='mt-5'>
          <h6 className='raleway-700'>Completed</h6>
          <StatusComponents
            status='Completed'
            estimatedDate='June 18, 2022'
            type='bank'
            payoutAmount={594.0}
          />
        </div>
      </div>
    </>
  )
}

export default PayoutContent
