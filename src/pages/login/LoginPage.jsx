import React from 'react'
import { Form, Button } from 'react-bootstrap'

const LoginPage = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    alert('test')
  }
  return (
    <div
      className='bg-dark d-flex align-items-center justify-content-center'
      style={{ height: '100vh' }}
    >
      <Form
        onSubmit={submitHandler}
        className='p-5 border-1 rounded shadow bg-light col-11 col-md-10 col-lg-7 col-xl-6'
      >
        <h3 className='text-dark raleway-700'>Login</h3>
        <Form.Group className='py-1 raleway-400'>
          <Form.Text>Username</Form.Text>
          <Form.Control
            required
            type='text'
            className='raleway-400'
            placeholder='Enter your username'
          />
        </Form.Group>{' '}
        <Form.Group className='py-1 raleway-400'>
          <Form.Text>Password</Form.Text>
          <Form.Control
            required
            type='password'
            className='raleway-400'
            placeholder='Enter your password'
          />
        </Form.Group>
        <div className='small text-muted'>
          We will never share your password
        </div>
        <Form.Group className='pt-3'>
          <Button type='submit' size='sm' className='me-2 raleway-400'>
            Log in
          </Button>
          <Button
            variant='outline-primary'
            type='submit'
            size='sm'
            className='raleway-400'
          >
            Create an Account
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default LoginPage
