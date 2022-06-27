import React from 'react'
import { Spinner } from 'react-bootstrap'

const MyDotSpinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <Spinner className='mx-2' variant='warning' animation='grow' />
      <Spinner className='mx-2' variant='warning' animation='grow' />
      <Spinner className='mx-2' variant='warning' animation='grow' />
      <Spinner className='mx-2' variant='warning' animation='grow' />
    </div>
  )
}

export default MyDotSpinner
