import React from 'react'
import { Spinner } from 'react-bootstrap'
// import context
import { useBlog } from '../../../context/ContextProvider'
// navigate
import { useNavigate } from 'react-router-dom'

const RelatedPosts = () => {
  const { firebaseData, loading } = useBlog()
  const navigate = useNavigate()
  return (
    <div>
      <h6 className='mb-4 raleway-700'>Related Posts</h6>
      <div className='row mb-4'>
        {loading ? (
          <div className='text-center mb-5'>
            <Spinner variant='light' animation='border' size='lg' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          </div>
        ) : (
          firebaseData.slice(2, 5).map((item, index) => (
            <div
              onClick={() => navigate(`/blog/${item.id}`)}
              style={{ cursor: 'pointer' }}
              key={index}
              className='col-lg-4 col-md-6 p-2 related-posts-card'
            >
              <div>
                <div style={{ height: '10rem' }}>
                  <img
                    className='w-100 h-100'
                    src={item.img}
                    alt='test'
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className='py-3'>
                  <div>
                    <h5 className='raleway-700'>{item.title}</h5>
                  </div>
                  <hr />
                  <i className='bi bi-tag me-1'></i>
                  <span
                    style={{ fontSize: '12px' }}
                    className='raleway-400 text-capitalize'
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default RelatedPosts
