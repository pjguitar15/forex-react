import React, { useState, useEffect } from 'react'
import MySpinner from '../../../../components/MySpinner'
import Axios from 'axios'
import { db } from '../../../../firebase/firebaseConfig'
import { collection, getDocs, updateDoc, doc, query } from 'firebase/firestore'
import useGetCurrEmail from '../../../../custom-hooks/useGetCurrEmail'
import MyDotSpinner from '../../../../components/MyDotSpinner'

const ProofOfAddress = () => {
  const [fakeLoading, setFakeLoading] = useState(true)
  const [currentUserId, setCurrentUserId] = useState('')
  const [selectedFile, setSelectedFile] = useState([])
  const [fileLoading, setFileLoading] = useState(false)
  const [imgFromFirestore, setImgFromFirestore] = useState('')
  const [user] = useGetCurrEmail()
  useEffect(() => {
    if (selectedFile.length > 0) {
      uploadFileHandler()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile])

  //   Check if selfie image exists from datbase
  useEffect(() => {
    if (user.email !== '') {
      const collectionRef = collection(db, 'users')
      const q = query(collectionRef)
      const getData = async () => {
        const data = await getDocs(q)
        const allData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const filteredData = allData.filter((item) => item.email === user.email)
        if (filteredData[0].id !== '') {
          setCurrentUserId(filteredData[0].id)
          if (typeof filteredData[0].proofOfAddressImg !== 'undefined') {
            setImgFromFirestore(filteredData[0].proofOfAddressImg)
            console.log(filteredData[0].proofOfAddressImg)
          }
        }
      }
      getData()
    }
  }, [user])

  //   uploads file to cloudinary and data to firestore
  const uploadFileHandler = () => {
    setFileLoading(true)

    // upload to cloudinary
    const formData = new FormData()
    formData.append('file', selectedFile[0]) // selectedImage is a state
    formData.append('upload_preset', 'forex-website-imgs')

    const cloudName = 'philcob'
    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    )
      .then((res) => {
        setImgFromFirestore(res.data.url)
        // update firebase
        updateItem(res.data.url)
      })
      .then(() => {
        setFileLoading(false)
        setSelectedFile([])
      })
      .catch((err) => console.log(err)) // res.data.url takes the image url
  }
  const updateItem = async (item) => {
    try {
      const userDoc = doc(db, 'users', currentUserId)
      const newFields = { proofOfAddressImg: item }
      await updateDoc(userDoc, newFields)
    } catch (error) {
      console.log(error)
    }
  }

  // fake loading to false
  useEffect(() => {
    setTimeout(() => setFakeLoading(false), 1000)
  }, [])
  return (
    <div>
      {fakeLoading ? (
        <div className='text-center py-5 w-100'>
          <MyDotSpinner />
        </div>
      ) : (
        <div className='py-5 px-3'>
          {!imgFromFirestore ? (
            <h4 className='rubik-400 text-center mb-4 m-0 p-0'>
              Proof of Address
            </h4>
          ) : (
            ''
          )}
          {fileLoading && (
            <div className='text-center'>
              <MySpinner />
              <div className='rubik-400'>Loading...</div>
            </div>
          )}
          {imgFromFirestore !== '' ? (
            <>
              <div
                className='text-center rubik-400 alert alert-warning'
                style={{ fontSize: '18px' }}
              >
                Status:{' '}
                <span className='fw-bold'>
                  Your image is waiting to be approved
                </span>
              </div>
              <div>
                <img className='w-100 h-100' src={imgFromFirestore} alt='' />
              </div>
            </>
          ) : (
            ''
          )}

          {!imgFromFirestore && (
            <div
              for='file-upload'
              className='p-5 text-center col-12 col-md-7 mx-auto'
              style={{
                border: '2px solid #d8d8d8',
                borderStyle: 'dashed',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <input
                onChange={(e) => setSelectedFile(e.target.files)}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  height: '100px',
                  opacity: '0',
                  cursor: 'pointer',
                }}
                className='h-100 w-100 bg-warning'
                id='file-upload'
                type='file'
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='110'
                height='110'
                fill='grey'
                className='bi bi-cloud-upload-fill'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z'
                />
              </svg>
              <h4 className='rubik-400 text-muted m-0'>
                {selectedFile.length > 0
                  ? selectedFile[0].name
                  : 'Click or Drag your files here to upload'}
                {/* Filename.jpg */}
              </h4>
            </div>
          )}

          <div className='text-muted mt-3 text-center col-md-9 mx-auto'>
            {imgFromFirestore !== ''
              ? 'Your image has been uploaded and is waiting to be approved by the administrator. '
              : `Drag your files to the box above to upload the files.
      Alternatively, you can click the upload box to upload the files.
      Please note there is a limit of 2MB per file.`}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProofOfAddress
