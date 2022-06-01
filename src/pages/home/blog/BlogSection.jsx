import React from 'react'
import { Container } from 'react-bootstrap'
import BlogPosts from './BlogPosts'

const BlogSection = () => {
  return (
    <div className='blog-bg'>
      <Container style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className='text-center'>
          <p
            className='raleway-400-italic text-white'
            style={{ fontSize: '22px', letterSpacing: '8px' }}
          >
            Bullish Beast (Pty) Ltd
          </p>
          <h1
            className='raleway-700 text-white'
            style={{ letterSpacing: '4px' }}
          >
            TRADERS BLOG
          </h1>
        </div>
        <div className='col-lg-1 mx-auto py-3'>
          <hr className='w-100' style={{ color: 'white' }} />
        </div>
        {/* All are Raleway */}
        <BlogPosts />
      </Container>
    </div>
  )
}

export default BlogSection
