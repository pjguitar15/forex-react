import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TopButtons from '../../../components/logged-in-components/TopButtons'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
// Invoice component
import Invoice from '../../../components/portfolio-components/Invoice'

const ShowInvoice = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      // take data here
      getAuth().onAuthStateChanged((user) => {
        if (user.emailVerified === true) {
          navigate('/show-invoice')
        } else {
          console.log('Please verify your email first')
          navigate('/verify-email')
        }
      })
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <div className='bg-dark text-light' style={{ padding: '150px 0' }}>
      <Container>
        <TopButtons />
        <Invoice />
      </Container>
    </div>
  )
}

export default ShowInvoice
