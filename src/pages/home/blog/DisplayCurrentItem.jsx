import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const DisplayCurrentItem = ({ firebaseData, loading }) => {
  const { id } = useParams()
  return (
    <div>
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
            <div key={index}>
              <img src={item.img} className='w-100' alt='cover' />
              <h3 className='rubik-400 pt-5' style={{ color: '#fff' }}>
                {item.title}
              </h3>
              <div className='rubik-400 py-2' style={{ fontSize: '13px' }}>
                <span className='me-4'>by {item.author}</span>
                <span>{item.date}</span>
              </div>
              <hr />
              <p
                className='raleway-400 text-light'
                style={{
                  textAlign: 'justify',
                  fontSize: '15px',
                  lineHeight: '27px',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {item.content}
              </p>{' '}
            </div>
          ))
      )}
    </div>
  )
}

export default DisplayCurrentItem
