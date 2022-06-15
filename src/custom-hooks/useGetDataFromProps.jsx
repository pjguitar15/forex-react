import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

const useGetDataFromProps = ({ email }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    if (email) {
      const collectionRef = collection(db, 'users')
      const q = query(collectionRef, orderBy('timestamp', 'desc'))
      const getData = async () => {
        const data = await getDocs(q)
        const response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const filter = response.filter((item) => item.email === email)
        setData(filter[0])
        setLoading(false)
      }
      getData()
    }
  }, [email])

  return [data, loading]
}

export default useGetDataFromProps
