import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import axios from 'axios'

const CurrencyCoverter = () => {
  const [selectLoading, setSelectLoading] = useState(false)
  const [convertLoading, setConvertLoading] = useState(false)
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [inputValue, setInputValue] = useState(100)
  const [firstSelectValue, setFirstSelectValue] = useState('zar')
  const [secondSelectValue, setSecondSelectValue] = useState('usd')
  const [conversionResult, setConversionResult] = useState(0)

  useEffect(() => {
    setSelectLoading(true)
    axios
      .get(
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'
      )
      .then((res) => {
        let newArr = []
        const allKeys = Object.keys(res.data)
        const allValues = Object.values(res.data)

        for (let i = 0; i < allKeys.length; i++) {
          newArr[i] = { itemKey: allKeys[i], itemValue: allValues[i] }
        }
        console.log(newArr)
        setCurrencyOptions(newArr)
      })
      .then(() => {
        setSelectLoading()
      })
  }, [])

  const convertHandler = () => {
    setConvertLoading(true)
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${firstSelectValue}/${secondSelectValue}.json`
      )
      .then((res) => {
        const result = Object.values(res.data)[1]
        setConversionResult(result * inputValue)
      })
      .then(() => setConvertLoading(false))
  }

  let today = new Date()

  useEffect(() => {
    setConvertLoading(true)
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${firstSelectValue}/${secondSelectValue}.json`
      )
      .then((res) => {
        const result = Object.values(res.data)[1]
        setConversionResult(result * inputValue)
      })
      .then(() => setConvertLoading(false))
  }, [firstSelectValue, secondSelectValue, inputValue])
  return (
    <div className='py-5' style={{ background: '#606060' }}>
      <Container className='py-5 '>
        <div className='border rounded bg-light'>
          <h4
            className='text-light py-3 text-center'
            style={{ background: '#018FFD' }}
          >
            Currency Converter
          </h4>
          <div className='px-4'>
            <div className='my-3'>
              <div className='small'>Value</div>
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type='number'
                style={{ fontSize: '26px' }}
                className='form-control p-3 raleway-700'
                placeholder='Enter amount'
              />
            </div>
            <div className='row'>
              <div className='col-6'>
                <div className='small'>From</div>
                <select
                  onChange={(e) => setFirstSelectValue(e.target.value)}
                  className='form-control p-3 raleway-700'
                  type='select'
                >
                  {currencyOptions
                    .filter((item) => item.itemValue === 'South African rand')
                    .map((item, index) => (
                      <option key={index} value={item.itemKey}>
                        {item.itemValue}
                      </option>
                    ))}
                  {selectLoading ? (
                    <option>LOADING...</option>
                  ) : (
                    currencyOptions.map((item, index) => (
                      <option key={index} value={item.itemKey}>
                        {item.itemValue}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className='col-6'>
                <div className='small'>To</div>
                <select
                  onChange={(e) => setSecondSelectValue(e.target.value)}
                  className='form-control p-3 raleway-700'
                  type='select'
                >
                  {currencyOptions
                    .filter((item) => item.itemValue === 'United States dollar')
                    .map((item, index) => (
                      <option key={index} value={item.itemKey}>
                        {item.itemValue}
                      </option>
                    ))}
                  {selectLoading ? (
                    <option>LOADING...</option>
                  ) : (
                    currencyOptions.slice(1).map((item, index) => (
                      <option key={index} value={item.itemKey}>
                        {item.itemValue}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>
          </div>
          <div className='my-3'>
            <h1 className='display-3 fw-5 text-center'>
              {conversionResult ? conversionResult.toFixed(4) : '0.00'}
            </h1>
            <div className='form-text text-center'>
              Rates {today.toDateString()}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CurrencyCoverter
