import React from 'react'

const CalendarItem = ({ item }) => {
  return (
    <div className='row calendar-small-text my-1'>
      <div className='col-6 p-0'>
        <div className='d-flex align-content-center justify-content-center'>
          <div
            className='text-center py-3 me-1'
            style={{ width: '10%', background: '#D1D1D1', color: '#666666' }}
          >
            {item.date.slice(10, 16)}
          </div>
          <div
            className='bg-light text-center py-3 me-1'
            style={{ width: '10%' }}
          >
            {item.country}
          </div>
          <div
            className='bg-light text-start py-3 ps-4 me-1'
            style={{ width: '80%', color: '#1191C0' }}
          >
            {item.title}
          </div>
        </div>
      </div>
      <div className='col-6 p-0'>
        {' '}
        <div className='d-flex align-content-center justify-content-center'>
          <div
            className='text-center py-3 me-1'
            style={{ width: '10%', background: '#E6CBCB' }}
          >
            GMT
          </div>
          <div
            className='text-center py-3 me-1'
            style={{ width: '26%', background: '#C3DEDE', color: '#333333' }}
          >
            {item.actual}
          </div>
          <div
            className='text-center py-3 me-1'
            style={{ width: '26%', background: '#BEEDC9' }}
          >
            GMT
          </div>
          <div
            className='text-center py-3 me-1'
            style={{ width: '26%', background: '#F6ECD4' }}
          >
            {item.previous}
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

export default CalendarItem
