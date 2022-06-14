import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TopButtons from '../../../components/logged-in-components/TopButtons'
import { useNavigate } from 'react-router-dom'
import useGetCurrEmail from '../../../custom-hooks/useGetCurrEmail'
// Invoice component
import Invoice from '../../../components/portfolio-components/Invoice'

const ShowInvoice = () => {
  const [isOnline] = useGetCurrEmail('test')
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      // take data here
      console.log(isOnline)
      navigate('/show-invoice')
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
