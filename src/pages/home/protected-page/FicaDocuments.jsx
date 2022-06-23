import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import TopButtons from '../../../components/logged-in-components/TopButtons'
import { useNavigate } from 'react-router-dom'

const FicaDocuments = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/fica-documents')
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <div
      className='bgtext-light'
      style={{ padding: '150px 0', background: '#080808' }}
    >
      <Container>
        <TopButtons />
        <div className='bg-white text-dark shadow'>
          <div className='border p-3' style={{ color: '#ff8514' }}>
            <h6 className='m-0 p-0'>FICA Document Upload</h6>
          </div>
          <div className='row' style={{ color: '#ff8514' }}>
            <div className='m-0 text-dark pe-md-2 col-md-4'>
              <div
                className='text-dark py-2 px-2 text-center'
                style={{ background: '#dddddd', cursor: 'pointer' }}
              >
                ID Document
              </div>
            </div>
            <div className='m-0 text-dark pe-md-2 col-md-4'>
              <div
                className='text-dark py-2 px-2 text-center'
                style={{ background: '#f1f0f0', cursor: 'pointer' }}
              >
                Proof of Address
              </div>
            </div>
            <div className='m-0 text-dark col-md-4'>
              <div
                className='text-dark py-2 px-2 text-center'
                style={{ background: '#f1f0f0', cursor: 'pointer' }}
              >
                Picture of yourself holding your ID
              </div>
            </div>
          </div>
          <div className='py-5 px-3'>
            <h4 className='rubik-400 text-center mb-4 m-0 p-0'>
              Please Upload your ID Document
            </h4>
            {/* dashed border */}
            <div
              className='p-5 text-center col-7 mx-auto'
              style={{
                border: '2px solid #d8d8d8',
                borderStyle: 'dashed',
                cursor: 'pointer',
              }}
            >
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
                Click or Drag your files here to upload
              </h4>
            </div>
            <div className='text-muted mt-3 text-center col-md-9 mx-auto'>
              Drag your files to the box above to upload the files.
              Alternatively, you can click the upload box to upload the files.
              Please note there is a limit of 2MB per file.
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FicaDocuments
