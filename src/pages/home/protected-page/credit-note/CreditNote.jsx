import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TopButtons from '../../../../components/logged-in-components/TopButtons'
import { useNavigate } from 'react-router-dom'
import CreditNoteCard from './CreditNoteCard'

const CreditNote = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/credit-note')
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <div className='text-light' style={{ background: '#080808' }}>
      <TopButtons />
      <Container className='py-5'>
        <CreditNoteCard />
      </Container>
    </div>
  )
}

export default CreditNote
