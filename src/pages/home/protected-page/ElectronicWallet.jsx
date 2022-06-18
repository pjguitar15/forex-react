import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import TopButtons from '../../../components/logged-in-components/TopButtons'
import { useNavigate } from 'react-router-dom'
import Fund from './Fund'
import Withdrawal from './Withdrawal'

const ElectronicWallet = () => {
  const [isFundSelected, setIsFundSelected] = useState(true)
  const [isWithdrawalSelected, setIsWithdrawalSelected] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/electronic-wallet')
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <div className='bg-dark text-light' style={{ padding: '150px 0' }}>
      <Container>
        <TopButtons />
        <h1 className='text-center rubik-400 mt-5'>Electronic Wallet</h1>
        <div className='my-4 bg-light text-dark p-4 rounded col-md-5'>
          <div>
            <h1 className='rubik-400 m-0 p-0'>$500</h1>
            <h5 className='rubik-400 m-0 p-0'>Available Balance</h5>
          </div>
        </div>
        <Button
          variant={`${isFundSelected ? 'light' : 'outline-light'} `}
          className='rubik-400 me-3 my-1 border-0'
          size='sm'
          onClick={() => {
            setIsFundSelected(true)
            setIsWithdrawalSelected(false)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-wallet2 me-2'
            viewBox='0 0 16 16'
          >
            <path d='M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z' />
          </svg>{' '}
          Fund
        </Button>
        <Button
          variant={`${isWithdrawalSelected ? 'light' : 'outline-light'}`}
          className='rubik-400 me-3 my-1 border-0'
          size='sm'
          onClick={() => {
            setIsWithdrawalSelected(true)
            setIsFundSelected(false)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-bank2 me-2'
            viewBox='0 0 16 16'
          >
            <path d='M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z' />
          </svg>
          Withdrawal
        </Button>
        {isFundSelected ? <Fund /> : ''}
        {isWithdrawalSelected ? <Withdrawal /> : ''}
      </Container>
    </div>
  )
}

export default ElectronicWallet
