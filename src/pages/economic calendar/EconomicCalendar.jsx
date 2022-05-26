import React, { useState, useEffect } from 'react'
import Jumbotron from '../home/Jumbotron'
import CalendarItem from './CalendarItem'

const EconomicCalendar = () => {
  const [todayDate, setTodayDate] = useState({})
  const [yesterdayDate, setYesterdayDate] = useState({})
  const [dateAfterTomorrowDate, setDateAfterTomorrowDate] = useState({})
  useEffect(() => {
    let today = new Date()

    const todayFromTodayClass = today.toDateString()
    const splitToday = todayFromTodayClass.split(' ')

    setTodayDate({
      dayOfWeek: splitToday[0],
      currMonth: splitToday[1],
      dayOfMonth: splitToday[2],
    })

    // yesterday
    today.setDate(today.getDate() - 1)
    const yesterday = today.toDateString()
    const splitYester = yesterday.split(' ')
    setYesterdayDate({
      dayOfWeek: splitYester[0],
      currMonth: splitYester[1],
      dayOfMonth: splitYester[2],
    })

    // day after tomorrow
    today.setDate(today.getDate() + 2)
    const dayAfterTomorrow = today.toDateString()
    const splitDayAfterTomorrow = dayAfterTomorrow.split(' ')
    setDateAfterTomorrowDate({
      dayOfWeek: splitDayAfterTomorrow[0],
      currMonth: splitDayAfterTomorrow[1],
      dayOfMonth: splitDayAfterTomorrow[2],
    })
  }, [])
  return (
    <>
      <Jumbotron />
      <div className='my-container py-4' style={{ background: '#606060' }}>
        {/* Table */}
        <h3 className='raleway-700 m-0 mb-3 text-white'>
          Forex Economic Calendar
        </h3>
        <CalendarItem />
        <h6 className='arial text-uppercase text-white text-center my-4'>
          {yesterdayDate.dayOfWeek}, {yesterdayDate.currMonth}{' '}
          {yesterdayDate.dayOfMonth}
        </h6>
        <CalendarItem />
        <CalendarItem />
        <h6 className='arial text-uppercase text-white text-center my-4'>
          {todayDate.dayOfWeek}, {todayDate.currMonth} {todayDate.dayOfMonth}
        </h6>
        <CalendarItem />
        <CalendarItem />
        <h6 className='arial text-uppercase text-white text-center my-4'>
          {dateAfterTomorrowDate.dayOfWeek}, {dateAfterTomorrowDate.currMonth}{' '}
          {dateAfterTomorrowDate.dayOfMonth}
        </h6>
        <CalendarItem />
        <CalendarItem />
      </div>
    </>
  )
}

export default EconomicCalendar
