import React from 'react'
const DisplayCurrentItem = ({ currentData }) => {
  return (
    <div>
      <img src={currentData.img} className='w-100' alt='cover' />
      <h3 className='raleway-700 pt-5' style={{ color: '#505050' }}>
        {currentData.title}
      </h3>
      <div className='raleway-400 py-2' style={{ fontSize: '13px' }}>
        <span className='me-4'>by {currentData.author}</span>
        <span>{currentData.date}</span>
      </div>
      <hr />
      <p
        className='raleway-400'
        style={{ fontSize: '14px', lineHeight: '25px', color: '#686868' }}
      >
        {currentData.content}
      </p>
    </div>
  )
}

export default DisplayCurrentItem
