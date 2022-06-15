import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TopButtons from '../../../components/logged-in-components/TopButtons'
import { useNavigate } from 'react-router-dom'
// payment logos
import bitcoin from '../../../assets/payment-gateway-logos/bitcoin.png'
import mastercard from '../../../assets/payment-gateway-logos/mastercard.png'
import ozow from '../../../assets/payment-gateway-logos/ozow.png'
import paypal from '../../../assets/payment-gateway-logos/paypal.png'
import peach from '../../../assets/payment-gateway-logos/peach.png'

const Deposit = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/deposit')
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <div className='bg-dark text-light' style={{ padding: '150px 0' }}>
      <Container>
        <TopButtons />
        <h1 className='text-center rubik-400 mt-5 mb-4'>Deposit</h1>
        {/* logos */}
        <div className='row'>
          <div className='col-md-2 p-2 mx-auto'>
            <div className='bg-white rounded shadow'>
              <img className='w-100 h-100' src={bitcoin} alt='payment' />
            </div>
          </div>
          <div className='col-md-2 p-2 mx-auto'>
            <div className='bg-white rounded shadow'>
              <img className='w-100 h-100' src={mastercard} alt='payment' />
            </div>
          </div>
          <div className='col-md-2 p-2 mx-auto'>
            <div className='bg-white rounded shadow'>
              <img className='w-100 h-100' src={ozow} alt='payment' />
            </div>
          </div>
          <div className='col-md-2 p-2 mx-auto'>
            <div className='bg-white rounded shadow'>
              <img className='w-100 h-100' src={paypal} alt='payment' />
            </div>
          </div>
          <div className='col-md-2 p-2 mx-auto'>
            <div className='bg-white rounded shadow'>
              <img className='w-100 h-100' src={peach} alt='payment' />
            </div>
          </div>
          <div className='col-md-2 p-2 mx-auto'>
            <div className='bg-white rounded shadow'>
              <img className='w-100 h-100' src={bitcoin} alt='payment' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Deposit
