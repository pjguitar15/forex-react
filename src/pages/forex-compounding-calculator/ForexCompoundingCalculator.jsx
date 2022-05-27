import React, { useState, useEffect } from 'react'
import Jumbotron from '../home/Jumbotron'
import Calculator from './Calculator'
import Table from './Table'

const ForexCompoundingCalculator = () => {
  const [result, setResult] = useState()
  const [startBalanceInput, setStartBalanceInput] = useState()
  const [percentPerMonthInput, setPercentPerMonthInput] = useState()
  const [numberOfMonthsInput, setNumberOfMonthsInput] = useState()
  const [showWarningAlert, setShowWarningAlert] = useState(false)
  const [resultsTable, setResultsTable] = useState([])

  const calculate = (e) => {
    e.preventDefault()
    if (startBalanceInput && percentPerMonthInput && numberOfMonthsInput) {
      const startBal = startBalanceInput
      const monthlyPercent = percentPerMonthInput
      const monthlyPercentAbs = monthlyPercent / 100 + 1
      const numberOfMonths = numberOfMonthsInput

      const calculateResult = (
        startBal * Math.pow(monthlyPercentAbs, numberOfMonths)
      ).toFixed(2)

      setResult(calculateResult)

      // create an array with size of numberOfMonths value
      // each increment previousValue will add up to its percentage
      let arrTable = []
      const percentInDecimal = monthlyPercent / 100
      let computedPercentage = parseInt(startBal)
      for (let i = 0; i < numberOfMonths; i++) {
        arrTable.push({
          month: arrTable.length + 1,
          percentage: monthlyPercent,
          previous: computedPercentage,
        })
        computedPercentage += percentInDecimal
      }
      setResultsTable(arrTable)
    } else {
      setResult()
      setShowWarningAlert(true)
    }
  }

  return (
    <div>
      <Jumbotron />
      <div
        className='py-5 text-light my-container'
        style={{ background: '#554D4D' }}
      >
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
          <div className='col-lg-8 py-3 px-4'>
            {/* Table headers */}
            <div className='row text-start raleway-700'>
              <div className='col-3 p-1'>
                <div className='p-3'>Month</div>
              </div>
              <div className='col-3 p-1'>
                <div className='p-3'>Previous</div>
              </div>
              <div className='col-3 p-1'>
                <div className='p-3'>%</div>
              </div>
              <div className='col-3 p-1'>
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
