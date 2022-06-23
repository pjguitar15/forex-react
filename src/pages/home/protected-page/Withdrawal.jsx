import React, { useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Withdrawal = () => {
  return (
    <Container className='bg-light text-dark p-0'>
      <div className='border p-3' style={{ color: 'orange' }}>
        <h6 className='m-0 p-0'>Withdrawal</h6>
      </div>
      <div className='py-4 px-3'>
        <div
          className='text-dark col-md-5 border p-4 mb-4'
          style={{ background: 'white' }}
        >
          <div>
            <h1 className='rubik-400 m-0 p-0'>$500</h1>
            <h5 className='rubik-400 m-0 p-0'>Available Balance</h5>
          </div>
        </div>
        <h4 className='text-start rubik-400 m-0 p-0'>Withdrawal</h4>
        <hr />
        <Form>
          <Form.Group className='row my-2'>
            <div className='col-2 rubik-400'>Account name</div>
            <div className='col-10'>
              <Form.Control
                className='rubik-400'
                placeholder='Enter account name'
              />
            </div>
          </Form.Group>{' '}
          <Form.Group className='row my-2'>
            <div className='col-2 rubik-400'>Account number</div>
            <div className='col-10'>
              <Form.Control
                className='rubik-400'
                placeholder='Enter account number'
              />
            </div>
          </Form.Group>{' '}
          <Form.Group className='row my-2'>
            <div className='col-2 rubik-400'>Amount</div>
            <div className='col-10'>
              <Form.Control
                type='number'
                className='rubik-400'
                placeholder='Enter amount'
              />
            </div>
          </Form.Group>
          <Form.Group className='row my-3'>
            <div className='col-2 rubik-400'>Date</div>
            <div className='col-10'>
              <div className='rubik-400'>
                {JSON.stringify(new Date()).slice(1, 11)}
              </div>
            </div>
          </Form.Group>
          <Form.Group className='row my-3'>
            <div className='col-2 rubik-400'>Bank</div>
            <div className='col-10'>
              <div className='rubik-400'>Registered Bank Name</div>
            </div>
          </Form.Group>
          <Form.Group className='row my-3'>
            <div className='col-2 rubik-400'>Currency</div>
            <div className='col-10'>
              <div className='rubik-400'>US Dollars</div>
            </div>
          </Form.Group>
          <hr />
          <Button className='rubik-400' variant='warning'>
            Withdraw
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Withdrawal
