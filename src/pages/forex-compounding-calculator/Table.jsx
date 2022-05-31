import React from 'react'

const Table = ({ item }) => {
  return (
    <div className='row text-start'>
      <div className='col-2 p-1 text-center'>
        <div className='px-3 py-2 text-dark' style={{ background: '#e2e2e2' }}>
          {item.month}
        </div>
      </div>
      <div className='col-4  p-1 text-center'>
        <div className='px-3 py-2 text-dark' style={{ background: '#e2e2e2' }}>
          ${item.previous}
        </div>
      </div>
      <div className='col-2 p-1 text-center'>
        <div className='px-3 py-2 text-dark' style={{ background: '#e2e2e2' }}>
          +{item.percentage}%
        </div>
      </div>
      <div className='col-4 p-1 text-center'>
        <div className='px-3 py-2 text-dark' style={{ background: '#e2e2e2' }}>
          ${item.total}
        </div>
      </div>
    </div>
  )
}

export default Table
