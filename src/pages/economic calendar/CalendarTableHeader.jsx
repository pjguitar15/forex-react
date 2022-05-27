import React from 'react'

const CalendarTableHeader = () => {
  return (
    <div className='row calendar-small-text my-1'>
      <div className='col-6 p-0'>
        <div className='d-flex align-content-center justify-content-center'>
          <div
            className='text-center py-3 me-1 fw-bold'
            style={{ width: '10%', background: '#fff', color: '#666666' }}
          >
            GMT
          </div>
          <div
            className='bg-light text-center py-3 me-1'
            style={{ width: '10%' }}
          ></div>
          <div
            className='bg-light text-start py-3 ps-4 me-1 fw-bold'
            style={{ width: '80%' }}
          >
            Event
          </div>
        </div>
      </div>
      <div className='col-6 p-0'>
        <div className='d-flex align-content-center justify-content-center'>
          <div
            className='text-center py-3 me-1 fw-bold'
            style={{ width: '10%', background: '#fff' }}
          >
            Vol.
          </div>
          <div
            className='text-center py-3 me-1 fw-bold'
            style={{ width: '26%', background: '#fff', color: '#333333' }}
          >
            Actual
          </div>
          <div
            className='text-center py-3 me-1 fw-bold'
            style={{ width: '26%', background: '#fff' }}
          >
            Consensus
          </div>
          <div
            className='text-center py-3 me-1 fw-bold'
            style={{ width: '26%', background: '#fff' }}
          >
            Previous
          </div>
          <div
            className='bg-light text-center py-3 me-1'
            style={{ width: '10%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default CalendarTableHeader
