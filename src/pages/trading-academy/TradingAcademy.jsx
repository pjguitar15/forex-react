import React from 'react'
import { Container } from 'react-bootstrap'
import Jumbotron from '../home/Jumbotron'
import AboutTradingAcademy from './AboutTradingAcademy'
import HopeAndSkills from './HopeAndSkills'

const TradingAcademy = () => {
  return (
    <div style={{ background: '#050505' }}>
      <Jumbotron />
      <h1 className='text-center mt-5 text-light rubik-400 mb-4'>
        Bullish Beast Trading Academy
      </h1>
      <AboutTradingAcademy />
      <HopeAndSkills />
    </div>
  )
}

export default TradingAcademy
