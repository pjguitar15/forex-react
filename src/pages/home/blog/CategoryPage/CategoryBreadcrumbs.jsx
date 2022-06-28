import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

const CategoryBreadcrumbs = ({ firebaseData, loading, id }) => {
  const [currentCategory, setCurrentCategory] = useState('')
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  const location = useLocation()
  useEffect(() => {
    const splitItem = location.pathname.slice(17).split('-')
    const joinItems = splitItem.join(' ')
    setCurrentCategory(joinItems)
  }, [location])
  const navigate = useNavigate()
  return (
    <div
      className='pb-5 rubik-400'
      style={{
        background: '#030303',
        borderBottom: '1px white solid',
      }}
    >
      <Container className='d-flex justify-content-between pt-5'>
        <h4 className='raleway-700 m-0' style={{ color: '#fff' }}>
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
            className='text-light raleway-400'
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
            style={{ color: '#fff', fontSize: '14px' }}
          >
            {currentCategory}
          </span>
        </div>
      </Container>
    </div>
  )
}

export default CategoryBreadcrumbs
