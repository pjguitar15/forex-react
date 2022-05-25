import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BlogData } from '../../../fake-data/BlogData'

const BreadCrumbs = ({ id }) => {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    setData(BlogData.filter((item) => item.id === id)[0])
  }, [])
  return (
    <div className='bg-light py-5'>
      <Container className='d-flex justify-content-between'>
        <h4 className='raleway-700 m-0' style={{ color: '#505050' }}>
          Blog Post
        </h4>
        <div>
          <span
            onClick={() => navigate('/')}
            className='text-muted raleway-400'
            style={{ fontSize: '14px', cursor: 'pointer' }}
          >
            Home
          </span>
          <span className='text-muted mx-3'>
            <i className='bi bi-caret-right-fill'></i>
          </span>
          <span className='text-muted raleway-400' style={{ fontSize: '14px' }}>
            How to Guide
          </span>
          <span className='text-muted mx-3'>
            <i className='bi bi-caret-right-fill'></i>
          </span>
          <span
            className='raleway-400 fw-bold'
            style={{ color: '#505050', fontSize: '14px' }}
          >
            {data.title}
          </span>
        </div>
      </Container>
    </div>
  )
}

export default BreadCrumbs
