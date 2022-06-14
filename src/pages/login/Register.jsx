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

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
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
          navigate('/login')
          setAlertMsg('')
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
      <div
        className='bg-dark d-flex align-items-center justify-content-center'
        style={{ padding: '130px 0' }}
      >
        <Form
          onSubmit={submitHandler}
          className='p-5 border-1 col-11 col-md-10 col-lg-7 col-xl-6'
        >
          <h2 className='text-light rubik-400'>CREATE AN ACCOUNT</h2>
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
            <Form.Text className='text-light'>Identification Number</Form.Text>
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
    </>
  )
}

export default Register
