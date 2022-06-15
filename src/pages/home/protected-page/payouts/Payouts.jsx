import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TopButtons from '../../../../components/logged-in-components/TopButtons'
import { useNavigate } from 'react-router-dom'
import PayoutsContent from './PayoutsContent'

const Payouts = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/payouts')
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <div className='bg-dark text-light' style={{ padding: '150px 0' }}>
      <Container>
        <TopButtons />
        <h1 className='text-center rubik-400 mt-5'>Payouts</h1>
        <PayoutsContent />
      </Container>
    </div>
  )
}

export default Payouts
