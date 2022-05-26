import React from 'react'

const Table = ({ item }) => {
  return (
    <div>
      <div className='row text-start'>
        <div className='col-3 p-1'>
          <div className='p-3 text-dark' style={{ background: '#A3A3A3' }}>
            {item.month}
          </div>
        </div>
        <div className='col-3 p-1'>
          <div className='p-3 text-dark' style={{ background: '#A3A3A3' }}>
            {item.month}
          </div>
        </div>
        <div className='col-3 p-1'>
          <div className='p-3 text-dark' style={{ background: '#A3A3A3' }}>
            +{item.percentage}%
          </div>
        </div>
        <div className='col-3 p-1'>
          <div className='p-3 text-dark' style={{ background: '#A3A3A3' }}>
            {item.month}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
