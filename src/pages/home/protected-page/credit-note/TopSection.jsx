import React from 'react'
import { Badge } from 'react-bootstrap'

const TopSection = () => {
  return (
    <div>
      {' '}
      <div className='d-flex justify-content-between rubik-400'>
        <div>
          <div>Customer Name</div>
          <div>123 Anytown</div>
          <div>Anyville</div>
          <div>United States</div>
          <div>12345</div>
        </div>
        <div>
          <div>
            Credit Note Ref: <span className='fw-bold'>A153Y26312A3-001</span>
          </div>
          <div>
            Credit Note Date: <span className='fw-bold'>May 22, 2022</span>
          </div>
          <div>
            Credit Amount: <span className='fw-bold'>-$10.70 (USD)</span>
          </div>
          <div>
            Customer ID: <span className='fw-bold'>AI53YZ631A3</span>
          </div>
          <Badge bg='danger'>Failed</Badge>
        </div>
      </div>
    </div>
  )
}

export default TopSection
