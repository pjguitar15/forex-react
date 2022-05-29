import React from 'react'

const Table = ({ item }) => {
  return (
    <div>
      <div className='row text-start'>
        <div className='col-3 p-1'>
          <div className='p-3 text-dark' style={{ background: '#ffffff' }}>
            {item.month}
          </div>
        </div>
        <div className='col-3 p-1'>
          <div className='p-3 text-dark' style={{ background: '#ffffff' }}>
            ${item.previous}
          </div>
        </div>
        <div className='col-3 p-1'>
          <div className='p-3 text-dark' style={{ background: '#ffffff' }}>
            +{item.percentage}%
          </div>
        </div>
        <div className='col-3 p-1'>
          <div className='p-3 text-dark' style={{ background: '#ffffff' }}>
            ${item.total}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
