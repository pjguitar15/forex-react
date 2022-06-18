import React from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from '../home/Jumbotron'
import LogosIb from './LogosIb'

const Partnership = () => {
  return (
    <div className='bg-dark'>
      <Jumbotron />
      <Container className='pt-5'>
        <h1 className='text-center text-light rubik-400 mb-4'>Partnership</h1>
        <LogosIb />
      </Container>
    </div>
  )
}

export default Partnership
