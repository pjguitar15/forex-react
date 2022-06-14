import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { db } from '../../../firebase/firebaseConfig'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// top buttons component
import TopButtons from '../../../components/logged-in-components/TopButtons'

const Portfolios = () => {
  const [firebaseData, setFirebaseData] = useState([])
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/investment-portfolios')
    } else {
      navigate('/login')
    }
  }, [])

  useEffect(() => {
    const getUser = () => {
      getAuth().onAuthStateChanged((user) => {
        if (user) {
          // Get current logged in username
          const collectionRef = collection(db, 'users')
          const q = query(collectionRef, orderBy('timestamp', 'desc'))
          const getData = async () => {
            const data = await getDocs(q)
            const results = data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
            const filtered = results.filter((item) => item.email === user.email)
            setFirebaseData(filtered)
          }
          getData()
        } else {
          // No user is signed in.
          console.log('There is no logged in user')
        }
      })
    }
    getUser()
  }, [])

  useEffect(() => {
    if (firebaseData.length > 0) {
      setCurrentLoggedInUser(
        firebaseData[0].firstName +
          ' ' +
          firebaseData[0].middleName +
          ' ' +
          firebaseData[0].lastName +
          '!'
      )
    }
  }, [firebaseData])
  return (
    <div className='bg-dark text-light' style={{ padding: '150px 0' }}>
      <Container>
        <TopButtons />
        <div className='mt-3'>
          {currentLoggedInUser ? (
            <h6>Welcome {currentLoggedInUser}</h6>
          ) : (
            <h6>Loading...</h6>
          )}
        </div>

        <h1 className='text-center rubik-400 mt-5'>Investment Portfolios</h1>
      </Container>
    </div>
  )
}

export default Portfolios
