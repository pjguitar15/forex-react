import React, { useState, useEffect } from 'react'
import Jumbotron from '../home/Jumbotron'
import CalendarItem from './CalendarItem'
import CalendarTableHeader from './CalendarTableHeader'
import ScriptTag from 'react-script-tag'
import { Spinner, Container } from 'react-bootstrap'
import LiveMarket from './LiveMarket'

// import context
import { useGetCalendarApi } from '../../context/EconomicCalendarProvider'

const EconomicCalendar = () => {
  // widget loading
  const [isWidgetLoading, setIsWidgetLoading] = useState(true)
  const [yesterdayDate, setYesterdayDate] = useState({})
  // I use this to combine all the day, month, and year values to become string
  // to be able to check the matching conditions for the API
  const [yesterdayDateToString, setYesterdayDateToString] = useState('')
  const [todayDateToString, setTodayDateToString] = useState('')
  const [tomorrowDateToString, setTomorrowDateToString] = useState('')

  const [todayDate, setTodayDate] = useState({})
  const [dateAfterTomorrowDate, setDateAfterTomorrowDate] = useState({})

  // context
  const { calendarApiValue, testValue } = useGetCalendarApi()

  useEffect(() => {
    let today = new Date()

    const todayFromTodayClass = today.toDateString()
    const splitToday = todayFromTodayClass.split(' ')

    setTodayDate({
      dayOfWeek: splitToday[0],
      currMonth: splitToday[1],
      dayOfMonth: splitToday[2],
      currMonthInNum: today.getMonth() + 1,
      currYear: today.getFullYear(),
    })

    // should be like this 2022-05-26
    const takeMonth = today.getMonth() + 1
    const yearToString = '' + today.getFullYear()
    const monthToString = '' + takeMonth
    const conditionalMonth =
      monthToString.length === 1 ? '0' + monthToString : monthToString

    setTodayDateToString(
      yearToString + '-' + conditionalMonth + '-' + splitToday[2]
    )

    // yesterday
    today.setDate(today.getDate() - 1)
    const yesterday = today.toDateString()
    const splitYester = yesterday.split(' ')
    setYesterdayDate({
      dayOfWeek: splitYester[0],
      currMonth: splitYester[1],
      dayOfMonth: splitYester[2],
      currMonthInNum: today.getMonth() + 1,
      currYear: today.getFullYear(),
    })

    // should be like this 2022-05-26
    const takeMonth2 = today.getMonth() + 1
    const yearToString2 = '' + today.getFullYear()
    const monthToString2 = '' + takeMonth2
    const conditionalMonth2 =
      monthToString2.length === 1 ? '0' + monthToString2 : monthToString2

    setYesterdayDateToString(
      yearToString2 + '-' + conditionalMonth2 + '-' + splitYester[2]
    )

    // day after tomorrow
    today.setDate(today.getDate() + 2)
    const dayAfterTomorrow = today.toDateString()
    const splitDayAfterTomorrow = dayAfterTomorrow.split(' ')
    setDateAfterTomorrowDate({
      dayOfWeek: splitDayAfterTomorrow[0],
      currMonth: splitDayAfterTomorrow[1],
      dayOfMonth: splitDayAfterTomorrow[2],
      currMonthInNum: today.getMonth() + 1,
      currYear: today.getFullYear(),
    })

    // should be like this 2022-05-26
    const takeMonth3 = today.getMonth() + 1
    const yearToString3 = '' + today.getFullYear()
    const monthToString3 = '' + takeMonth3
    const conditionalMonth3 =
      monthToString3.length === 1 ? '0' + monthToString3 : monthToString3

    setTomorrowDateToString(
      yearToString3 + '-' + conditionalMonth3 + '-' + splitDayAfterTomorrow[2]
    )

    // console.log(calendarApiValue[0].date)
    // 2022-05-25 05:00:00
  }, [])

  return (
    <div style={{ background: '#606060' }}>
      <Jumbotron />

      <div className='p-md-5 p-2'>
        <h3 className='raleway-700 m-0 mb-3 text-white'>
          Forex Economic Calendar
        </h3>
        {isWidgetLoading ? (
          <div className='text-center' style={{ marginTop: '50px' }}>
            <Spinner
              style={{ height: '7rem', width: '7rem' }}
              animation='border'
              size='xl'
              variant='light'
            />
          </div>
        ) : (
          ''
        )}
        <ScriptTag
          onLoad={() => setTimeout(() => setIsWidgetLoading(false), 2500)}
          isHydrating={true}
          type='text/javascript'
          src='https://widgets.myfxbook.com/scripts/fxCalendar.js'
        />
      </div>
      <Container>
        {/* Table */}

        {/* <CalendarTableHeader /> */}

        {/* widget here */}
        {/* <script
          type='text/javascript'
          src='https://widgets.myfxbook.com/scripts/fxCalendar.js'
        ></script> */}
      </Container>
    </div>
  )
}

export default EconomicCalendar
