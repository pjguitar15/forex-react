import React, { useState, useContext } from 'react'
const AuthContext = React.createContext()
export const useBlogItem = () => {
  return useContext(AuthContext)
}
export const ContextProvider = ({ children }) => {
  const [currentItem, setCurrentItem] = useState([])
  const test = 'This is a variable from useContext'
  const value = {
    test,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
