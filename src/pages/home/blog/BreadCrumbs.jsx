import React, { useState, useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// context
import { useBlog } from '../../../context/ContextProvider'

const BreadCrumbs = ({ id }) => {
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

  const { firebaseData, loading } = useBlog()
  const navigate = useNavigate()

  // tag clicked
  const tagClicked = (id) => {
    const endPoint = '/blog/categories'
    if (id === 'how to guide') {
      navigate(endPoint + '/how-to-guide')
    }
    if (id === 'traders education') {
      navigate(endPoint + '/traders-education')
    }
    if (id === 'make money online') {
      navigate(endPoint + '/make-money-online')
    }
    if (id === 'technical analysis') {
      navigate(endPoint + '/technical-analysis')
    }
    if (id === 'uncategorized') {
      navigate(endPoint + '/uncategorized')
    }
    if (id === 'cryptocurrency') {
      navigate(endPoint + '/cryptocurrency')
    }
    if (id === 'lifestyle') {
      navigate(endPoint + '/lifestyle')
    }
  }
  return (
    <div
      className='bg-light pb-5'
      style={{ paddingTop: windowDimension.winWidth < 990 ? '120px' : '170px' }}
    >
      {loading ? (
        <div className='text-center mb-5'>
          <Spinner animation='border' size='lg' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        firebaseData
          .filter((item) => item.id === id)
          .map((item, index) => (
            <Container
              key={index}
              className='d-lg-flex justify-content-between'
            >
              <h4
                className='raleway-700 m-0 mb-2 mb-md-0'
                style={{ color: '#505050' }}
              >
                Blog Post
              </h4>
              <div>
                <span
                  onClick={() => navigate('/')}
                  className='text-muted text-capitalize raleway-400'
                  style={{ fontSize: '14px', cursor: 'pointer' }}
                >
                  Home
                </span>
                <span
                  className='iconify mx-2 text-muted'
                  data-icon='entypo:chevron-thin-right'
                ></span>
                <span
                  onClick={() => tagClicked(item.tag)}
                  className='text-muted raleway-400'
                  style={{
                    fontSize: '14px',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                  }}
                >
                  {item.tag}
                </span>
                <span
                  className='iconify mx-2 text-muted'
                  data-icon='entypo:chevron-thin-right'
                ></span>
                <span
                  className='raleway-400 fw-bold text-capitalize'
                  style={{ color: '#505050', fontSize: '14px' }}
                >
                  {item.title}
                </span>
              </div>
            </Container>
          ))
      )}
    </div>
  )
}

export default BreadCrumbs
