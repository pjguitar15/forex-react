import React, { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'

const CurrencyCoverter = () => {
  const [selectLoading, setSelectLoading] = useState(false)
  const [convertLoading, setConvertLoading] = useState(false)
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [inputValue, setInputValue] = useState(0)
  const [firstSelectValue, setFirstSelectValue] = useState('')
  const [secondSelectValue, setSecondSelectValue] = useState('')
  const [conversionResult, setConversionResult] = useState()

  var myHeaders = new Headers()
  myHeaders.append('apikey', 'xXnxL3gGFh87LGqB3Oi2ny0smEzsXIcF')

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  }
  useEffect(() => {
    setSelectLoading(true)
    fetch('https://api.apilayer.com/exchangerates_data/symbols', requestOptions)
      .then((response) => response.json())
      .then((result) => setCurrencyOptions(result.symbols))
      .then(() => {
        setSelectLoading(false)
      })
      .catch((error) => setSelectLoading(false))
  }, [])

  const convertHandler = () => {
    setConvertLoading(true)
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${secondSelectValue}&from=${firstSelectValue}&amount=${inputValue}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setConversionResult(result.result))
      .then(() => setConvertLoading(false))
      .catch((error) => console.log('error', error))
  }

  let today = new Date()
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
                className='form-control p-3'
                placeholder='Enter amount'
              />
            </div>
            <div className='row'>
              <div className='col-6'>
                <div className='small'>From</div>
                <select
                  onChange={(e) => setFirstSelectValue(e.target.value)}
                  className='form-control p-3'
                  type='select'
                >
                  {selectLoading ? (
                    <option>LOADING...</option>
                  ) : (
                    Object.keys(currencyOptions).map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className='col-6'>
                <div className='small'>To</div>
                <select
                  onChange={(e) => setSecondSelectValue(e.target.value)}
                  className='form-control p-3'
                  type='select'
                >
                  {selectLoading ? (
                    <option>LOADING...</option>
                  ) : (
                    Object.keys(currencyOptions).map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <Button
              disabled={convertLoading}
              className='mt-4'
              onClick={convertHandler}
            >
              {convertLoading ? 'Converting...' : 'Convert'}
            </Button>
          </div>
          <div className='my-3'>
            <h1 className='display-3 fw-5 text-center'>
              {conversionResult ? conversionResult : '0.00'}
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