import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'

// create a context with your custom name
// create a hook function and return useContext and pass your context created above
// create a value object to store all the value that will be used  globally
// return the provider to your jsx

const EconomicCalendarContext = React.createContext()

export const useGetCalendarApi = () => {
  return useContext(EconomicCalendarContext)
}

export const EconomicCalendarProvider = ({ children }) => {
  const [calendarApiValue, setCalendarApiValue] = useState([])
  const [dayAfterTomorrow, setDayAfterTomorrow] = useState({})
  const [dayYesterday, setDayYesterday] = useState({})
  useEffect(() => {
    let today = new Date()
    today.setDate(today.getDate() + 2)
    const yesterdayMonth = today.getMonth() + 1
    const yesterdayDay = today.getDate()
    const yesterdayYear = today.getFullYear()
    setDayAfterTomorrow({
      month: yesterdayMonth,
      day: yesterdayDay,
      year: yesterdayYear,
    })
    today.setDate(today.getDate() - 3)
    const dayAfterTomorrowMonth = today.getMonth() + 1
    const dayAfterTomorrowDay = today.getDate()
    const dayAfterTomorrowYear = today.getFullYear()
    setDayYesterday({
      month: dayAfterTomorrowMonth,
      day: dayAfterTomorrowDay,
      year: dayAfterTomorrowYear,
    })
    // year, month, yesterdayDay, tomorrow = currentDay + 2
  }, [])

  const value = { calendarApiValue }
  return (
    <EconomicCalendarContext.Provider value={value}>
      {children}
    </EconomicCalendarContext.Provider>
  )
}

export default EconomicCalendarProvider
