import React, { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

const useGetCurrEmail = () => {
  const [user, setUser] = useState('')
  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        // No user is signed in.
        console.log('There is no logged in user')
      }
    })
  }, [])
  return [user]
}

export default useGetCurrEmail
