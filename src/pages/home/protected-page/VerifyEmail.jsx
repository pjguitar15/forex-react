import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { getAuth, sendEmailVerification } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const VerifyEmail = () => {
  const [loggedInEmail, setLoggedInEmail] = useState('')
  const [btnMsg, setBtnMsg] = useState('RESEND VERIFICATION EMAIL')
  const [isVerified, setIsVerified] = useState(false)
  const navigate = useNavigate()

  const sendVerificationHandler = () => {
    getAuth().onAuthStateChanged((user) => {
      try {
        sendEmailVerification(user)
          .then(() => {
            setBtnMsg('EMAIL VERIFICATION SENT')
            setTimeout(() => {
              setBtnMsg('RESEND VERIFICATION EMAIL')
            }, [7000])
          })
          .catch((err) => {
            console.log(err)
          })
      } catch (error) {}
    })
  }

  const troubleVerifyingHandler = () => {
    alert('Please check your email spam')
  }

  useEffect(() => {
    let myInterval = setInterval(() => {
      window.location.reload()
    }, 8000)

    return () => {
      clearInterval(myInterval)
    }
  })

  useEffect(() => {
    if (isVerified) {
      window.location.reload()
    }
  }, [isVerified])

  useEffect(() => {
    const getUser = () => {
      getAuth().onAuthStateChanged((user) => {
        if (user) {
          setLoggedInEmail(user.email)
        } else {
          // No user is signed in.
        }
      })
    }
    getUser()
  }, [])

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      getAuth().onAuthStateChanged((user) => {
        if (user.emailVerified === true) {
          navigate('/investment-portfolios')
        } else {
          navigate('/verify-email')
        }
      })
    } else {
      navigate('/login')
    }
  }, [])

  const logoutHandler = () => {
    sessionStorage.removeItem('Auth Token')
    navigate('/login')
  }
  return (
    <div className='bg-dark' style={{ height: '100vh' }}>
      <Container style={{ paddingTop: '200px' }}>
        <div className='text-end col-md-10 col-12 mx-auto'>
          <Button
            onClick={logoutHandler}
            variant='outline-light'
            className='mb-3 border-0'
            size='sm'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-box-arrow-left me-2'
              viewBox='0 0 16 16'
            >
              <path
                fill-rule='evenodd'
                d='M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z'
              />
              <path
                fill-rule='evenodd'
                d='M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z'
              />
            </svg>
            Logout
          </Button>
        </div>
        <div className='p-5 text-center bg-light shadow col-md-10 col-12 mx-auto'>
          <h2 className='rubik-400'>Verify Your Email Address</h2>
          <p className='m-0 p-0'>
            We have sent an email verification to your email.
          </p>
          <p className='m-0 p-0'>
            To continue using Bullish beast, please verify your email address:
          </p>
          <h5 className='fw-bold rubik-400 my-4'>{loggedInEmail}</h5>
          <Button
            onClick={sendVerificationHandler}
            size='lg'
            type='primary'
            shape='round'
          >
            {btnMsg}
          </Button>
          <div
            className='mt-4'
            onClick={troubleVerifyingHandler}
            style={{ cursor: 'pointer' }}
          >
            <a href='#'>Trouble Verifying?</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default VerifyEmail
