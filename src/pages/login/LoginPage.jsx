import React, { useState, useEffect } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { app } from '../../firebase/firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alertMsg, setAlertMsg] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    const authentication = getAuth(app)
    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/show-invoice')
        sessionStorage.setItem(
          'Auth Token',
          response._tokenResponse.refreshToken
        )
      })
      .catch((err) => {
        const errorCode = err.code
        const errorMessage = err.message
        if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
          setAlertMsg(
            'User not found. Please check your username/password again.'
          )
        } else if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
          setAlertMsg('Incorrect Password')
        } else {
          setAlertMsg(errorMessage)
        }
      })
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/investment-portfolios')
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <div
      className='bg-dark d-flex align-items-center justify-content-center'
      style={{ height: '100vh' }}
    >
      <Form
        onSubmit={submitHandler}
        className='p-5 border-1 col-11 col-md-10 col-lg-7 col-xl-6'
      >
        <h2 className='text-light rubik-400'>LOGIN</h2>
        <Form.Group className='py-1 rubik-400'>
          <Form.Text className='text-light'>Username</Form.Text>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
            className='rubik-400 rounded-0 mt-2'
            placeholder='Enter your username'
          />
        </Form.Group>{' '}
        <Form.Group className='py-1 rubik-400'>
          <Form.Text className='text-light'>Password</Form.Text>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password'
            className='rubik-400 rounded-0 mt-2'
            placeholder='Enter your password'
          />
        </Form.Group>
        <div className='small rubik-400 text-muted'>
          We will never share your password
        </div>
        <Form.Group className='pt-3'>
          <Alert variant='danger' show={alertMsg !== ''}>
            {alertMsg}
          </Alert>
          <Button
            type='submit'
            size='sm'
            className='col-12 rounded-0 rubik-400'
          >
            Log in
          </Button>
        </Form.Group>
        <Button
          onClick={() => navigate('/register')}
          variant='outline-primary'
          type='submit'
          size='sm'
          className='rubik-400 mt-3 col-12'
        >
          Create an Account
        </Button>
      </Form>
    </div>
  )
}

export default LoginPage
