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
    <div className='bg-dark text-light' style={{ padding: '150px 0' }}>
      <Container>
        <TopButtons />
        <h1 className='text-center rubik-400 mt-5'>Fica Documents</h1>
        <div
          className='py-5 mt-4'
          style={{ border: 'dashed 2px gray', borderStyle: 'dashed' }}
        >
          <h5 className='text-center'>Upload your Fica Documents here</h5>
          <Form.Group className='col-md-7 mx-auto'>
            <Form.Control type='file' />
          </Form.Group>
        </div>
      </Container>
    </div>
  )
}

export default FicaDocuments
