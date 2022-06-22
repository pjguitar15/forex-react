import React, { useState, useEffect, useRef } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { app } from '../../firebase/firebaseConfig'
import { db } from '../../firebase/firebaseConfig'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'
import { addDoc, serverTimestamp, collection } from 'firebase/firestore'
import RegisterSuccessModal from '../../components/RegisterSuccessModal'
import useGetDataFromEmail from '../../custom-hooks/useGetDataFromEmail'
import ResidentialAddress from './ResidentialAddress'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { v4 as uuidv4 } from 'uuid'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [segment, setSegment] = useState('3000')
  const [identificationNumber, setIdentificationNumber] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [suburb, setSuburb] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [postCode, setPostCode] = useState('')
  const [country, setCountry] = useState('Afghanistan')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState('')
  const [alertMsg, setAlertMsg] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [data] = useGetDataFromEmail()

  // ref
  const phoneInputRef = useRef()

  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setAlertMsg('Passwords do not match')
    } else if (password.length < 7) {
      setAlertMsg('Password must contain atleast 7 characters')
    } else {
      // Add to Auth
      const authentication = getAuth(app)
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          alert('Your account has been created!')
          const authentication = getAuth(app)
          signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
              if (data) {
                if (!data.isPaid) {
                  navigate('/show-invoice')
                  sessionStorage.setItem(
                    'Auth Token',
                    response._tokenResponse.refreshToken
                  )
                } else {
                  navigate('/investment-portfolios')
                  sessionStorage.setItem(
                    'Auth Token',
                    response._tokenResponse.refreshToken
                  )
                }
              }
            })
            .then(() => {
              getAuth().onAuthStateChanged((user) => {
                try {
                  sendEmailVerification(user)
                    .then(() => {
                      console.log(
                        'Email verification has been sent to your email'
                      )
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                } catch (error) {}
              })
            })
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
        houseNumber: houseNumber,
        streetAddress: streetAddress,
        suburb: suburb,
        city: city,
        province: province,
        postCode: postCode,
        country: country,
        contactNumber: phoneInputRef.current.numberInputRef.value,
        email: email,
        invoiceNumber: uuidv4().slice(24),
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

  useEffect(() => {
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
    if (password.length < 6) {
      setPasswordStrength('Poor. Password length must be 6 above.')
    } else if (
      isSymbolIncluded &&
      isNumberIncluded &&
      isSmallLettersIncluded &&
      isCapitalLettersIncluded
    ) {
      setPasswordStrength('Excellent')
    } else if (
      isNumberIncluded &&
      isSmallLettersIncluded &&
      isCapitalLettersIncluded
    ) {
      setPasswordStrength(
        'Great. Now add a symbol like !@#$ for maximum security.'
      )
    } else if (isSmallLettersIncluded && isCapitalLettersIncluded) {
      setPasswordStrength('Good. (Please include numbers and symbols)')
    } else if (isSmallLettersIncluded) {
      setPasswordStrength('Poor (Please include uppercase letters)')
    } else {
      setPasswordStrength('Weak')
    }
  }, [password])
  return (
    <>
      <RegisterSuccessModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <div className='bg-dark row rubik-400' style={{ padding: '130px 0' }}>
        <div className='col-lg-7 col-xl-6 py-5 px-3'>
          <Form onSubmit={submitHandler} className='p-4 bg-black border-1'>
            <h2 className='text-light rubik-400 mb-3'>START YOUR INVESTMENT</h2>
            <Form.Group className='py-2 rubik-400'>
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
            <Form.Group className='py-2 rubik-400'>
              <Form.Text className='text-light'>Middle name</Form.Text>
              <Form.Control
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                type='text'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Enter your middle name (optional)'
              />
            </Form.Group>
            <Form.Group className='py-2 rubik-400'>
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
            <Form.Group className='py-2 rubik-400'>
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
            <Form.Group className='py-2 rubik-400'>
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
            <ResidentialAddress
              houseNumber={houseNumber}
              setHouseNumber={setHouseNumber}
              streetAddress={streetAddress}
              setStreetAddress={setStreetAddress}
              suburb={suburb}
              setSuburb={setSuburb}
              city={city}
              setCity={setCity}
              province={province}
              setProvince={setProvince}
              postCode={postCode}
              setPostCode={setPostCode}
              country={country}
              setCountry={setCountry}
            />
            <Form.Group className='py-2 rubik-400'>
              <Form.Text className='text-light'>Contact Number</Form.Text>
              <PhoneInput country={'us'} ref={phoneInputRef} />
            </Form.Group>
            <Form.Group className='py-2 rubik-400'>
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
            <Form.Group className='py-2 rubik-400'>
              <Form.Text className='text-light'>Password</Form.Text>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type='password'
                className='rubik-400 rounded-0 mt-2'
                placeholder='Create your password'
              />
              <div
                className={`small rubik-400 ${
                  passwordStrength === 'Weak' ||
                  passwordStrength ===
                    'Poor (Please include uppercase letters)' ||
                  passwordStrength === 'Poor. Password length must be 6 above.'
                    ? 'text-danger'
                    : ''
                } ${
                  passwordStrength ===
                    'Good. (Please include numbers and symbols)' ||
                  passwordStrength ===
                    'Great. Now add a symbol like !@#$ for maximum security.'
                    ? 'text-warning'
                    : ''
                }  ${passwordStrength === 'Excellent' ? 'text-success' : ''} `}
              >
                {passwordStrength}
              </div>
            </Form.Group>{' '}
            <Form.Group className='py-2 rubik-400'>
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
              variant='primary'
              size='sm'
              className='rubik-400 mt-2 col-12'
            >
              I already have an account
            </Button>
          </Form>
        </div>
        <div className='col-lg-5 col-xl-6 text-light p-5'>
          <h1>Open a Live Investment Account</h1>
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
