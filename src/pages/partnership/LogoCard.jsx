import React from 'react'

const LogoCard = ({ img, name, leverage, fcsa }) => {
  return (
    <div
      className='col-6 col-sm-6 col-md-4 col-xl-3 p-3 ib-logo'
      onClick={() => alert('still working on this part. thanks!')}
    >
      <img className='w-100 bg-white rounded' src={img} alt='logo' />
      <div className='py-3'>
        <h4 className='text-light'>{name}</h4>
        <hr className='text-white' />
        <div className='d-flex justify-content-between'>
          <h6 className='text-light'>Leverage</h6>
          <h6 className='text-light'>{leverage}</h6>
        </div>{' '}
        <div className='d-flex justify-content-between'>
          <h6 className='text-light'>FCSA / FSP nr.</h6>
          <h6 className='text-light'>{fcsa}</h6>
        </div>
      </div>
    </div>
  )
}

export default LogoCard
