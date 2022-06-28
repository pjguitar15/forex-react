import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TopButtons from '../../../../components/logged-in-components/TopButtons'
import { useNavigate } from 'react-router-dom'
import PayoutContent from './PayoutContent'
import PayoutButtons from './PayoutButtons'

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
    <div className='text-light' style={{ background: '#080808' }}>
      <TopButtons />
      <Container className='py-5'>
        <PayoutButtons />
        <PayoutContent />
      </Container>
    </div>
  )
}

export default Payouts
