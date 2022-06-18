import React from 'react'
import useGetDataFromEmail from '../../../../custom-hooks/useGetDataFromEmail'
const PersonalDetailsContent = () => {
  const [data, loading] = useGetDataFromEmail()

  return (
    <div>
      <div className='row mt-4'>
        <div className='py-3 px-5 col-md-3'>
          <div className='text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100'
              height='100'
              fill='currentColor'
              className='bi bi-person-circle'
              viewBox='0 0 16 16'
            >
              <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
              <path
                fill-rule='evenodd'
                d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
              />
            </svg>
            <h5 className='my-3 text-center'>
              {data.firstName} {data.middleName} {data.lastName}
              {loading ? 'Loading...' : ''}
            </h5>
          </div>
        </div>
        <div className='col-md-9 p-3'>
          <div className='p-3' style={{ background: '#292e33' }}>
            <div className='d-flex justify-content-between'>
              <p className='m-0'>First name: </p>
              <p className='m-0'>
                {data.firstName}
                {loading ? 'Loading...' : ''}
              </p>
            </div>
          </div>{' '}
          <div className='p-3'>
            <div className='d-flex justify-content-between'>
              <p className='m-0'>Middle name: </p>
              <p className='m-0'>
                {data.middleName}
                {loading ? 'Loading...' : ''}
              </p>
            </div>
          </div>{' '}
          <div className='p-3' style={{ background: '#292e33' }}>
            <div className='d-flex justify-content-between'>
              <p className='m-0'>Last name: </p>
              <p className='m-0'>
                {data.lastName}
                {loading ? 'Loading...' : ''}
              </p>
            </div>
          </div>{' '}
          <div className='p-3'>
            <div className='d-flex justify-content-between'>
              <p className='m-0'>Email: </p>
              <p className='m-0'>
                {data.email}
                {loading ? 'Loading...' : ''}
              </p>
            </div>
          </div>{' '}
          <div className='p-3' style={{ background: '#292e33' }}>
            <div className='d-flex justify-content-between'>
              <p className='m-0'>Contact Number: </p>
              <p className='m-0'>
                {data.contactNumber}
                {loading ? 'Loading...' : ''}
              </p>
            </div>
          </div>{' '}
          {}
          <div className='p-3'>
            <div className='d-flex justify-content-between'>
              <p className='m-0'>Residential Address: </p>
              <div className='text-end col-7 col-lg-4'>
                <p className='m-0'>
                  {data.houseNumber}, {data.streetAddress}, {data.suburb}
                  {data.suburb ? ', ' : ''}
                  {data.city}
                  {data.city ? ', ' : ''}
                  {data.province}
                  {data.province ? ', ' : ''}
                  {data.postCode}, {data.country}
                  {loading ? 'Loading...' : ''}
                </p>
              </div>
            </div>
          </div>{' '}
          <div className='p-3' style={{ background: '#292e33' }}>
            <div className='d-flex justify-content-between'>
              <p className='m-0'>Identification Number: </p>
              <p className='m-0'>
                {data.identificationNumber}
                {loading ? 'Loading...' : ''}
              </p>
            </div>
          </div>{' '}
          <div className='p-3'>
            <div className='d-flex justify-content-between'>
              <p className='m-0'>Account created: </p>
              <p className='m-0'>
                {data.dateCreated}
                {loading ? 'Loading...' : ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetailsContent
