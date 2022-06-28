import React from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from '../home/Jumbotron'
import LogosIb from './LogosIb'

const Partnership = () => {
  return (
    <div style={{ background: '#030303' }}>
      <Jumbotron />
      <Container className='pt-5'>
        <LogosIb />
      </Container>
    </div>
  )
}

export default Partnership
