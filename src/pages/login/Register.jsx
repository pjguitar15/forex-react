import React, { useState, useEffect } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { app } from '../../firebase/firebaseConfig'
import { db } from '../../firebase/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore'
import RegisterSuccessModal from '../../components/RegisterSuccessModal'
import useGetDataFromProps from '../../custom-hooks/useGetDataFromProps'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [segment, setSegment] = useState('3000')
  const [identificationNumber, setIdentificationNumber] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [alertMsg, setAlertMsg] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()

    const SYMBOLS = '!@#$%^&*()'
    const NUMBERS = '1234567890'
    const SMALL_LETTERS = 'abcdefghijklmnopqrstuvwxyz'
    const CAPITAL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // 4 boolean values should be true
    let isSymbolIncluded = false
    let isNumberIncluded = false
    let isSmallLettersIncluded = false
    let isCapitalLettersIncluded = false
    for (let i = 0; i < password.length; i++) {
      if (SYMBOLS.includes(password[i])) {
        isSymbolIncluded = true
      } else if (NUMBERS.includes(password[i])) {
        isNumberIncluded = true
      } else if (SMALL_LETTERS.includes(password[i])) {
        isSmallLettersIncluded = true
      } else if (CAPITAL_LETTERS.includes(password[i])) {
        isCapitalLettersIncluded = true
      }
    }

    if (password !== confirmPassword) {
      setAlertMsg('Passwords do not match')
    } else if (password.length < 7) {
      setAlertMsg('Password must contain atleast 7 characters')
    } else if (
      !isSymbolIncluded ||
      !isNumberIncluded ||
      !isSmallLettersIncluded ||
      !isCapitalLettersIncluded
    ) {
      setAlertMsg(
        `Password must contain Uppercase letters: A-Z.
        Lowercase letters: a-z.
        Numbers: 0-9.
        Symbols: ~@#$%^&*()_-+`
      )
    } else {
      // Add to Auth
      const authentication = getAuth(app)
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          alert('Your account has been created!')
          navigate('/login')
        })
        .catch((err) => {
          const errorMessage = err.message
          if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
            setAlertMsg(email + ' is already taken')
          } else {
            setAlertMsg('An error occured. Please try again')
          }
        })

      // add to firestore
      const collectionRef = collection(db, 'users')
      await addDoc(collectionRef, {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        identificationNumber: identificationNumber,
        segment: segment,
        address: address,
        contactNumber: contactNumber,
        email: email,
        dateCreated: JSON.stringify(new Date()).slice(1, 11),
        isPaid: false,
        timestamp: serverTimestamp(),
      })
    }
  }
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/investment-portfolios')
    } else {
      navigate('/register')
    }
  }, [])
  return (
    <>
      <RegisterSuccessModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <div className='bg-black row rubik-400' style={{ padding: '130px 0' }}>
        <div className='col-lg-6 p-5'>
          <Form onSubmit={submitHandler} className='p-5 bg-dark border-1'>
            <h2 className='text-light rubik-400 mb-3'>START YOUR INVESTMENT</h2>
            <Form.Group className='py-1 rubik-400'>
              <Form.Text className='text-light'>First name</Form.Text>
              <Form.Control
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                type='text'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Enter your first name'
              />
            </Form.Group>
            <Form.Group className='py-1 rubik-400'>
              <Form.Text className='text-light'>Middle name</Form.Text>
              <Form.Control
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                type='text'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Enter your middle name (optional)'
              />
            </Form.Group>
            <Form.Group className='py-1 rubik-400'>
              <Form.Text className='text-light'>Last name</Form.Text>
              <Form.Control
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                type='text'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Enter your last name'
              />
            </Form.Group>{' '}
            <Form.Group className='py-1 rubik-400'>
              <Form.Text className='text-light'>Segment</Form.Text>
              <Form.Select onChange={(e) => setSegment(e.target.value)}>
                <option>Please select a segment</option>
                <option value='3000'>$3,000</option>
                <option value='5000'>$5,000</option>
                <option value='10000'>$10,000</option>
                <option value='15000'>$15,000</option>
                <option value='20000'>$20,000</option>
                <option value='30000'>$30,000</option>
                <option value='50000'>$50,000</option>
                <option value='100000'>$100,000</option>
                <option value='150000'>$150,000</option>
                <option value='200000'>$200,000</option>
              </Form.Select>
            </Form.Group>{' '}
            <Form.Group className='py-1 rubik-400'>
              <Form.Text className='text-light'>
                Identification Number
              </Form.Text>
              <Form.Control
                value={identificationNumber}
                onChange={(e) => setIdentificationNumber(e.target.value)}
                required
                type='text'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Enter your Identification Number'
              />
            </Form.Group>{' '}
            <Form.Group className='py-1 rubik-400'>
              <Form.Text className='text-light'>Residential Address</Form.Text>
              <Form.Control
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                type='text'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Enter your residential address'
              />
            </Form.Group>
            <Form.Group className='py-1 rubik-400'>
              <Form.Text className='text-light'>Contact Number</Form.Text>
              <Form.Control
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
                type='text'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Enter your contact number'
              />
            </Form.Group>
            <Form.Group className='py-1 rubik-400'>
              <Form.Text className='text-light'>Email</Form.Text>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type='email'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Enter your email'
              />
            </Form.Group>
            <Form.Group className='py-1 rubik-400'>
              <Form.Text className='text-light'>Password</Form.Text>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type='password'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Create your password'
              />
            </Form.Group>{' '}
            <Form.Group className='py-1 rubik-400'>
              <Form.Text className='text-light'>Confirm Password</Form.Text>
              <Form.Control
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                type='password'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Confirm your password'
              />
            </Form.Group>
            <div className='small rubik-400 text-muted'>
              We will never share your password
            </div>
            <Form.Group className='pt-3'>
              <Alert variant='danger' size='sm' show={alertMsg !== ''}>
                {alertMsg}
              </Alert>
              <Button
                type='submit'
                size='sm'
                className='col-12 rounded-0 rubik-400'
              >
                Register
              </Button>
            </Form.Group>
            <Button
              onClick={() => navigate('/login')}
              variant='outline-primary'
              type='submit'
              size='sm'
              className='rubik-400 mt-2 col-12'
            >
              I already have an account
            </Button>
          </Form>
        </div>
        <div className='col-lg-6 text-light py-5'>
          <h1>Open a live trading account</h1>
          <div className='my-5'>
            <h4>Complete your application</h4>
            <p>
              Fill in your details using the form on this page. Our website is
              encrypted to secure your personal information.
            </p>
            <hr />
          </div>
          <div className='my-5'>
            <h4>Confirm your ID</h4>
            <p>
              To meet our obligations, we need to confirm your identity. This
              can be done electronically.
            </p>
            <hr />
          </div>
          <div className='my-5'>
            <h4>Fund your account</h4>
            <p>
              Use one of our fast, flexible and secure payment methods to
              deposit funds into your trading account
            </p>
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
