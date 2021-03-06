import React, { useState, useEffect } from 'react'
import useGetDataFromEmail from '../../../../custom-hooks/useGetDataFromEmail'
import { db } from '../../../../firebase/firebaseConfig'
import { doc, updateDoc } from 'firebase/firestore'
import userIcon from '../../../../assets/user.svg'
import Axios from 'axios'
const PersonalDetailsContent = () => {
  const [selectedImg, setSelectedImg] = useState([])
  const [data, loading] = useGetDataFromEmail()

  const selectImgHandler = async (e) => {
    setSelectedImg(e.target.files)
  }

  useEffect(() => {
    const updateItem = () => {
      // upload to cloudinary here
      const formData = new FormData()
      formData.append('file', selectedImg[0]) // selectedImage is a state
      formData.append('upload_preset', 'forex-website-imgs')

      const cloudName = 'philcob'
      Axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      ).then(async (res) => {
        console.log(res.data.url)
        const id = data.id
        const userDoc = doc(db, 'items', id)
        const newFields = { profileImg: res.data.url }
        await updateDoc(userDoc, newFields)
      })
    }
    if (selectedImg.length > 0) {
      console.log(selectedImg)
      console.log('initialize')
      updateItem()
    }
  }, [selectedImg, data])

  return (
    <div className='bg-white text-dark shadow'>
      <div className='border p-3' style={{ color: 'orange' }}>
        <h6 className='m-0 p-0'>Personal Details</h6>
      </div>
      <div className='py-4'>
        {/* <div className='col-5 col-md-2 mx-auto my-2'>
          <img src={userIcon} alt='user icon' />
        </div> */}
        {/* Upload image button */}
        <div className='col-6 col-sm-4 col-md-3 mx-auto'>
          <img
            className='w-100 h-100'
            src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
            alt='test'
          />
        </div>
        <div
          className='text-primary text-center'
          style={{ cursor: 'pointer', position: 'relative' }}
        >
          <input
            onChange={selectImgHandler}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: '0',
              left: '0',
              opacity: '0',
              cursor: 'pointer',
            }}
            type='file'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            fill='blue'
            className='bi bi-upload me-2'
            style={{ cursor: 'pointer' }}
            viewBox='0 0 16 16'
          >
            <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z' />
            <path d='M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z' />
          </svg>
          Upload Profile Picture
        </div>
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
