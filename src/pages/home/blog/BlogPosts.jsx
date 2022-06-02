import React from 'react'
import BlogCard from './BlogCard'
import { Spinner } from 'react-bootstrap'
// import context
import { useBlog } from '../../../context/ContextProvider'

const BlogPosts = () => {
  const { firebaseData, loading } = useBlog()
  return (
    <>
      <div className='row mt-2'>
        {loading ? (
          <div className='text-center mb-5'>
            <Spinner variant='light' animation='border' size='lg' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        ) : (
          firebaseData
            .slice(4, 10)
            .map((item, index) => (
              <BlogCard loading={loading} key={index} item={item} />
            ))
        )}
      </div>
    </>
  )
}

export default BlogPosts
