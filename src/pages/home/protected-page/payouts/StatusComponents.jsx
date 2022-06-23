import React from 'react'
import { Badge } from 'react-bootstrap'

// status='Pending'
//         estimatedDate='June 18, 2022'
//         type='bank'
//         payoutAmount={594.0}
const StatusComponents = ({ status, estimatedDate, type, payoutAmount }) => {
  return (
    <div>
      <div className='row fw-bold' style={{ fontSize: '12px' }}>
        <div className='col-md-3'>Status</div>
        <div className='col-md-3'>Estimated Date</div>
        <div className='col-md-3'>Type</div>
        <div className='col-md-3'>Payout amount</div>
      </div>
      <hr className='p-0 my-2 text-muted' />
      <div className='row'>
        <h6 className='col-md-3'>
          {status === 'Pending' ? (
            <Badge bg='info' className='text-dark'>
              {status}
            </Badge>
          ) : (
            ''
          )}
          {status === 'Sent' ? (
            <Badge bg='warning' className='text-dark'>
              {status}
            </Badge>
          ) : (
            ''
          )}
          {status === 'Completed' ? (
            <Badge bg='success' className='text-light'>
              {status}
            </Badge>
          ) : (
            ''
          )}
        </h6>
        <div style={{ fontSize: '12px' }} className='col-md-3'>
          {estimatedDate}
        </div>
        <div style={{ fontSize: '12px' }} className='col-md-3'>
          {type}
        </div>
        <div style={{ fontSize: '14px' }} className='col-md-3 rubik-400'>
          ${payoutAmount}
        </div>
      </div>
    </div>
  )
}

export default StatusComponents
