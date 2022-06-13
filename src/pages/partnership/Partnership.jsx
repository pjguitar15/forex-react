import React from 'react'
import { Container } from 'react-bootstrap'
import PartnershipTable from '../../components/PartnershipTable'
import LogosIb from './LogosIb'

const Partnership = () => {
  return (
    <div className='bg-dark' style={{ padding: '150px 0' }}>
      <Container>
        <h1 className='text-center text-light rubik-400 mb-4'>Partnership</h1>
        <PartnershipTable />
        <LogosIb />
      </Container>
    </div>
  )
}

export default Partnership
