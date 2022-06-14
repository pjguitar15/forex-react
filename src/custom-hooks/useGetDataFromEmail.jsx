import React, { useState, useEffect } from 'react'
import useGetCurrEmail from './useGetCurrEmail'
import { db } from '../firebase/firebaseConfig'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

const useGetDataFromEmail = () => {
  const [user] = useGetCurrEmail()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    if (user) {
      const collectionRef = collection(db, 'users')
      const q = query(collectionRef, orderBy('timestamp', 'desc'))
      const getData = async () => {
        const data = await getDocs(q)
        const response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const filter = response.filter((item) => item.email === user.email)
        console.log(response)
        console.log(user.email)
        setData(filter[0])
        setLoading(false)
      }
      getData()
    }
  }, [user])

  useEffect(() => {
    // console.log(data)
  }, [data])
  return [data, loading]
}

export default useGetDataFromEmail
