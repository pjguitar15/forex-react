import React from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from '../home/Jumbotron'

const TradingAcademy = () => {
  return (
    <div className='bg-dark'>
      <Jumbotron />
      <Container className='pt-5'>
        <h1 className='text-center text-light rubik-400 mb-4'>
          Trading Academy
        </h1>
      </Container>
    </div>
  )
}

export default TradingAcademy
