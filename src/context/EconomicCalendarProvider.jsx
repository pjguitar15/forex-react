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
  // test value
  const [testValue, setTestValue] = useState([
    {
      title: 'Wheat Export Sales New ',
      indicator: 'Wheat Export Sales New *',
      comment: '',
      country: 'US',
      currency: 'USD',
      importance: '0',
      period: 'w/o May. 16, 2022',
      actual: '43.4',
      forecast: '',
      previous: '77.8',
      source: 'Agricul Dept',
      scale: ' K',
      unit: 'Tonne',
      date: '2022-05-26 12:30:00',
    },
    {
      title: 'Wheat Export Sales Net ',
      indicator: 'Wheat Export Sales Net *',
      comment: '',
      country: 'US',
      currency: 'USD',
      importance: '0',
      period: 'w/o May. 16, 2022',
      actual: '-2.4',
      forecast: '',
      previous: '8.5',
      source: 'Agricul Dept',
      scale: ' K',
      unit: 'Tonne',
      date: '2022-05-26 12:30:00',
    },
    {
      title: 'Wheat Exp Sale Next Yr Net ',
      indicator: 'Wheat Exp Sale Next Yr Net *',
      comment: '',
      country: 'US',
      currency: 'USD',
      importance: '0',
      period: 'w/o May. 16, 2022',
      actual: '246.2',
      forecast: '',
      previous: '325.6',
      source: 'Agricul Dept',
      scale: ' K',
      unit: 'Tonne',
      date: '2022-05-27 12:30:00',
    },
    {
      title: 'Wheat Exp Sale Net Total ',
      indicator: 'Wheat Exp Sale Net Total *',
      comment: '',
      country: 'US',
      currency: 'USD',
      importance: '0',
      period: 'w/o May. 16, 2022',
      actual: '243.8',
      forecast: '',
      previous: '334.1',
      source: 'Agricul Dept',
      scale: ' K',
      unit: 'Tonne',
      date: '2022-05-27 12:30:00',
    },
    {
      title: 'Consumption, Adjusted MM',
      indicator: 'Consumption, Adjusted MM*',
      comment:
        "Personal income measures total pretax income earned by individuals, non-profitorganizations, and private trust funds, expressed at an annual rate. Wages andsalaries are the largest component of personal income. Other income categoriesinclude personal interest income, transfer payments (social security, stateunemployment insurance benefits etc), proprietors' income (both farm and non-farm), dividend income and rental income. From the total of these incomecategories, the value of personal contributions for social insurance issubtracted to arrive at personal income. Disposable personal income measurespersonal income less personal tax and non-tax payments. Personal saving iscalculated by subtracting personal outlays (personal consumption expendituresplus interest payments and net transfers to foreigners) from personal income.Personal Consumption Expenditures measures consumer spending for all goods andservices.",
      country: 'US',
      currency: 'USD',
      importance: '0',
      period: 'Apr. 2022',
      actual: '',
      forecast: '0.7',
      previous: '1.1',
      source: 'Dept of Commerce',
      scale: '',
      unit: '%',
      date: '2022-05-28 12:30:00',
    },
  ])
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
    // console.log(currentDay)
    // console.log(currentYear)

    // year, month, yesterdayDay, tomorrow = currentDay + 2

    // Axios.get(
    //   `https://fcsapi.com/api-v3/forex/economy_cal?symbol=USD,JPY&from=${dayYesterday.year}-${dayYesterday.month}-${dayYesterday.day}&to=${dayAfterTomorrow.year}-${dayAfterTomorrow.month}-${dayAfterTomorrow.day}&access_key=ljGMMLSmGSGesPELqL5G`
    // ).then((res) => {
    //   setCalendarApiValue(res.data.response)
    // })
    // console.log(calendarApiValue)
  }, [])

  const value = { calendarApiValue, testValue }
  return (
    <EconomicCalendarContext.Provider value={value}>
      {children}
    </EconomicCalendarContext.Provider>
  )
}

export default EconomicCalendarProvider
