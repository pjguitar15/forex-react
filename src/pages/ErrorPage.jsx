import React from 'react'
import './ErrorPage.css'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className='error-page'>
      <section className='error-container'>
        <span>4</span>
        <span>
          <span className='screen-reader-text'>0</span>
        </span>
        <span>4</span>
      </section>
      <h1 className='text-light text-center raleway-700'>
        You've found a page that doesn't exist
      </h1>
      <div className='link-container'>
        <a
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
          className='more-link'
        >
          Go back to Bullish Beast Website
        </a>
      </div>
    </div>
  )
}

export default ErrorPage
