import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

const CategoryBreadcrumbs = ({ firebaseData, loading, id }) => {
  const [currentCategory, setCurrentCategory] = useState('')
  const location = useLocation()
  useEffect(() => {
    const splitItem = location.pathname.slice(17).split('-')
    const joinItems = splitItem.join(' ')
    setCurrentCategory(joinItems)
  }, [location])
  const navigate = useNavigate()
  return (
    <div className='bg-light py-5'>
      <Container className='d-flex justify-content-between'>
        <h4 className='raleway-700 m-0' style={{ color: '#505050' }}>
          Category: {id === 'cryptocurrency' ? 'Cryptocurrency' : ''}
          {id === 'how-to-guide' ? 'How to Guide' : ''}
          {id === 'lifestyle' ? 'Lifestyle' : ''}
          {id === 'make-money-online' ? 'Make Money Online' : ''}
          {id === 'technical-analysis' ? 'Technical Analysis' : ''}
          {id === 'traders-education' ? 'Traders Education' : ''}
          {id === 'uncategorized' ? 'Uncategorized' : ''}
        </h4>
        <div>
          <span
            onClick={() => navigate('/')}
            className='text-muted raleway-400'
            style={{ fontSize: '14px', cursor: 'pointer' }}
          >
            Home
          </span>
          <span
            className='iconify mx-2 text-muted'
            data-icon='entypo:chevron-thin-right'
          ></span>
          <span
            className='raleway-400 fw-bold text-capitalize'
            style={{ color: '#505050', fontSize: '14px' }}
          >
            {currentCategory}
          </span>
        </div>
      </Container>
    </div>
  )
}

export default CategoryBreadcrumbs
