import React from 'react'
import { Container } from 'react-bootstrap'

const Jumbotron = () => {
  return (
    <div className='my-jumbotron'>
      <Container>
        <p className='text-center jumbotron-content'>
          Circle Markets Ltd has ceased trading, investors please contact RES
          Corporate Services Limited,
        </p>
        <p className='text-center jumbotron-content'>
          Email: digby@rescorporate.co.nz Website: www.rescorporate.co.nz{' '}
        </p>
      </Container>
    </div>
  )
}

export default Jumbotron
