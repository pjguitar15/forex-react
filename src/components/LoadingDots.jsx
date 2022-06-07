import React from 'react'

const LoadingDots = () => {
  return (
    <div className='text-center pt-4 py-5'>
      <div className='spinner-grow text-light mx-2' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='spinner-grow text-light mx-2' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='spinner-grow text-light mx-2' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
      <div className='spinner-grow text-light mx-2' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default LoadingDots
