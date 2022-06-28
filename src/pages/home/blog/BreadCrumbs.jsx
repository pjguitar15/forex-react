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
      className='pb-5 rubik-400'
      style={{
        background: '#030303',
        borderBottom: '1px white solid',
      }}
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
              className='d-lg-flex justify-content-between pt-5'
            >
              <h4 className='rubik-400 m-0 mb-2 mb-md-0 text-light'>
                Blog Post
              </h4>
              <div>
                <span
                  onClick={() => navigate('/')}
                  className='text-capitalize rubik-400 text-light'
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
                  className='text-light rubik-400'
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
                  className='rubik-400 text-capitalize'
                  style={{ color: '#fff', fontSize: '14px' }}
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
