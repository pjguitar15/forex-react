import React from 'react'
import { Container } from 'react-bootstrap'
import MemberCard from './MemberCard'

const Team = () => {
  return (
    <div className='bg-black'>
      <Container className='py-5'>
        <div className='raleway-700 text-center'>
          <h5 style={{ color: '#b1976b', letterSpacing: '4px' }}>MEET</h5>
          <h1 className='m-0 text-light'>The Team</h1>
        </div>

        <div className='row py-5'>
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </Container>
    </div>
  )
}

export default Team
