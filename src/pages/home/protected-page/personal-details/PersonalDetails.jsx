import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TopButtons from '../../../../components/logged-in-components/TopButtons'
import { useNavigate } from 'react-router-dom'
import PersonalDetailsContent from './PersonalDetailsContent'

const PersonalDetails = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/personal-details')
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <div className='bg-dark text-light' style={{ padding: '150px 0' }}>
      <Container>
        <TopButtons />
        <h3 className='rounded text-light p-3 text-center rubik-400 mt-5'>
          Personal Details
        </h3>
        <PersonalDetailsContent />
      </Container>
    </div>
  )
}

export default PersonalDetails
