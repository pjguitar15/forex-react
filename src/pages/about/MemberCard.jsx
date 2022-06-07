import React from 'react'

const MemberCard = () => {
  return (
    <div className='col-lg-4 col-md-6 col-12 p-3'>
      <div>
        <img
          className='w-100 h-100'
          src='https://agilecapital.co.za/wp-content/uploads/2019/02/Tshego-Website-2-600x500.jpg'
          alt=''
        />
      </div>
      {/* Person Info */}
      <div
        className='text-center py-3 text-light'
        style={{ background: '#252525' }}
      >
        <h6 className='raleway-700 m-0 text-uppercase'>Enter Name Here</h6>
        <div
          className='lead mt-2'
          style={{ letterSpacing: '4px', fontSize: '14px' }}
        >
          CEO
        </div>
        <hr className='mx-3 my-2' />
        <div className='text-light' style={{ fontSize: '20px' }}>
          <i className='bi bi-linkedin'></i>
        </div>
      </div>{' '}
    </div>
  )
}

export default MemberCard
