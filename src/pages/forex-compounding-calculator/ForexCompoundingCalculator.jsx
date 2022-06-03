import React, { useState, useEffect } from 'react'
import Jumbotron from '../home/Jumbotron'
import Calculator from './Calculator'
import Chart from './Chart'
import Table from './Table'

const ForexCompoundingCalculator = () => {
  const [lastTotalValue, setLastTotalValue] = useState(0)

  const [result, setResult] = useState(0)
  const [startBalanceInput, setStartBalanceInput] = useState(11)
  const [percentPerMonthInput, setPercentPerMonthInput] = useState(10)
  const [numberOfMonthsInput, setNumberOfMonthsInput] = useState(10)
  const [showWarningAlert, setShowWarningAlert] = useState(false)
  const [resultsTable, setResultsTable] = useState([])
  const [chartData, setChartData] = useState([])

  const calculate = (e) => {
    e.preventDefault()

    if (startBalanceInput && percentPerMonthInput && numberOfMonthsInput) {
      const startBal = startBalanceInput
      const monthlyPercent = percentPerMonthInput
      const monthlyPercentAbs = monthlyPercent / 100 + 1
      const numberOfMonths = numberOfMonthsInput

      const calculateResult = parseFloat(
        (startBal * Math.pow(monthlyPercentAbs, numberOfMonths)).toFixed(2)
      )

      // SET RESULTS HERE
      setResult(calculateResult)

      // create an array with size of numberOfMonths value
      // each increment previousValue will add up to its percentage
      let arrTable = []
      let previousValue = parseInt(startBal)

      // computedPercentage *= percentInDecimal + (arrTable.length + 1)
      for (let i = 0; i <= numberOfMonths; i++) {
        const computeTotalValue =
          previousValue + previousValue * (monthlyPercent / 100)
        arrTable.push({
          month: arrTable.length + 1,
          previous: parseFloat(previousValue.toFixed(2)),
          percentage: monthlyPercent,
          total: parseFloat(computeTotalValue.toFixed(2)),
        })
        previousValue = previousValue + previousValue * (monthlyPercent / 100)
        // computedPercentage
      }

      // SET TABLE HERE
      setResultsTable(arrTable)
    } else {
      setResult()
      setShowWarningAlert(true)
    }
  }

  useEffect(() => {
    const startBal = startBalanceInput
    const monthlyPercent = percentPerMonthInput
    const monthlyPercentAbs = monthlyPercent / 100 + 1
    const numberOfMonths = numberOfMonthsInput

    const calculateResult = parseFloat(
      (startBal * Math.pow(monthlyPercentAbs, numberOfMonths)).toFixed(2)
    )

    setResult(calculateResult)

    // create an array with size of numberOfMonths value
    // each increment previousValue will add up to its percentage
    let arrTable = []
    let previousValue = parseInt(startBal)

    // computedPercentage *= percentInDecimal + (arrTable.length + 1)
    for (let i = 0; i <= numberOfMonths; i++) {
      const computeTotalValue =
        previousValue + previousValue * (monthlyPercent / 100)
      arrTable.push({
        month: arrTable.length + 1,
        previous: parseFloat(previousValue.toFixed(2)),
        percentage: monthlyPercent,
        total: parseFloat(computeTotalValue.toFixed(2)),
      })
      previousValue = previousValue + previousValue * (monthlyPercent / 100)
      // computedPercentage
    }
    setResultsTable(arrTable)
  }, [])

  useEffect(() => {
    let newArr = []
    resultsTable.forEach((item) => {
      newArr.push({ name: item.month, total: item.total })
    })
    setChartData(newArr)

    console.log('componentDidMount: ' + JSON.stringify(resultsTable))
  }, [resultsTable])

  useEffect(() => {
    // CHANGE DOMAIN VALUE HERE
    // ERROR HERE!!!
    let lastValue = 0
    for (let i = 0; i < chartData.length; i++) {
      lastValue = chartData[i].total
    }
    console.log('LAST VALUE: ' + lastValue)
    setLastTotalValue(lastValue)
  }, [chartData])

  return (
    <div>
      <Jumbotron />
      <div className='py-5 text-light my-container compounding-calculator'>
        <h5 className='raleway-700 mb-3'>Forex Compounding Calculator</h5>
        <p className='raleway-400' style={{ fontSize: '12px' }}>
          Forex Compounding Calculator calculates monthly interest earnings
          based on specified Starting Balance, Monthly percent gain and Number
          of Months, and outputs the result both as a chart and a table. Simply
          fill in the form below and click "Calculate" button.
        </p>
        <hr className='my-4' />
        <div className='row'>
          <div className='col-lg-4'>
            <Calculator
              calculate={calculate}
              startBalanceInput={startBalanceInput}
              setShowWarningAlert={setShowWarningAlert}
              setStartBalanceInput={setStartBalanceInput}
              percentPerMonthInput={percentPerMonthInput}
              setPercentPerMonthInput={setPercentPerMonthInput}
              numberOfMonthsInput={numberOfMonthsInput}
              setNumberOfMonthsInput={setNumberOfMonthsInput}
              showWarningAlert={showWarningAlert}
              result={result}
            />
          </div>

          {/* table here */}
          <div className='col-lg-8 py-3 px-0 px-md-5'>
            <Chart lastTotalValue={lastTotalValue} chartData={chartData} />
            {/* Table headers */}
            <div className='row text-start raleway-700'>
              <div className='col-2 p-1 text-center'>
                <div className='p-3'>Month</div>
              </div>
              <div className='col-4 p-1 text-center'>
                <div className='p-3'>Previous</div>
              </div>
              <div className='col-2 p-1 text-center'>
                <div className='p-3'>%</div>
              </div>
              <div className='col-4 p-1 text-center'>
                <div className='p-3'>Total</div>
              </div>
            </div>
            {resultsTable.map((item, index) => (
              <Table key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForexCompoundingCalculator
