import React from 'react'
import useGetDataFromEmail from '../../../../custom-hooks/useGetDataFromEmail'
const PersonalDetailsContent = () => {
  const [data, loading] = useGetDataFromEmail()

  return (
    <div className='bg-white text-dark py-4 shadow'>
      <div>
        <div className='p-3 rubik-400'>
          <div className='p-3' style={{ background: '#eeeeee' }}>
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
          <div className='p-3' style={{ background: '#eeeeee' }}>
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
          <div className='p-3' style={{ background: '#eeeeee' }}>
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
          <div className='p-3' style={{ background: '#eeeeee' }}>
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
