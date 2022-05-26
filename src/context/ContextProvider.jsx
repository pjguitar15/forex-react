import React, { useState, useContext, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig'
import {
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'
const AuthContext = React.createContext()
export const useBlog = () => {
  return useContext(AuthContext)
}
export const ContextProvider = ({ children }) => {
  const [firebaseData, setFirebaseData] = useState([])
  const [loading, setLoading] = useState(false)

  const collectionRef = collection(db, 'blog')
  const createUser = async (title, author, date, content, img, tag) => {
    await addDoc(collectionRef, {
      title,
      author,
      date,
      content,
      img,
      tag,
      timestamp: serverTimestamp(),
    })
      .then(() => alert('success'))
      .catch((err) => alert(err))
  }

  useEffect(() => {
    setLoading(true)
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setFirebaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setLoading(false)
    }
    getData()
  }, [])

  const value = {
    firebaseData,
    setFirebaseData,
    createUser,
    loading,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
