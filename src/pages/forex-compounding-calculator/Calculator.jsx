import React from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
const Calculator = ({
  calculate,
  startBalanceInput,
  setShowWarningAlert,
  setStartBalanceInput,
  percentPerMonthInput,
  setPercentPerMonthInput,
  numberOfMonthsInput,
  setNumberOfMonthsInput,
  showWarningAlert,
  result,
}) => {
  return (
    <>
      <Form onSubmit={calculate}>
        <Form.Group className='py-2'>
          <Form.Text className='text-light raleway-700'>
            Start Balance
          </Form.Text>
          <Form.Control
            value={startBalanceInput}
            onChange={(e) => {
              setShowWarningAlert(false)
              setStartBalanceInput(e.target.value)
            }}
            type='number'
            placeholder='Enter starting balance'
          />
        </Form.Group>
        <Form.Group className='py-2'>
          <Form.Text className='text-light raleway-700'>
            Percent per month, %:
          </Form.Text>
          <Form.Control
            type='number'
            placeholder='Enter percent per month'
            value={percentPerMonthInput}
            onChange={(e) => {
              setShowWarningAlert(false)
              setPercentPerMonthInput(e.target.value)
            }}
          />
        </Form.Group>
        <Form.Group className='py-2'>
          <Form.Text className='text-light raleway-700'>
            Number of Months:
          </Form.Text>
          <Form.Control
            type='number'
            placeholder='Enter number of months'
            value={numberOfMonthsInput}
            onChange={(e) => {
              setNumberOfMonthsInput(e.target.value)
              setShowWarningAlert(false)
            }}
          />
        </Form.Group>
        <Alert show={showWarningAlert} variant='warning mt-2 mb-0' size='md'>
          Please fill up all the fields
        </Alert>
        <Button
          style={{ background: '#0090FF' }}
          type='submit'
          size='lg'
          className='col-12 my-2 py-3 rounded-0'
        >
          Calculate
        </Button>
        <Alert
          show={result !== undefined}
          variant='info mt-2 mb-0 raleway-700'
          size='md'
          style={{ fontSize: '18px' }}
        >
          Result: ${result}
        </Alert>
      </Form>
    </>
  )
}

export default Calculator
