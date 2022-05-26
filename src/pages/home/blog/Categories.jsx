import React from 'react'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='p-4 mb-3 text-white' style={{ background: '#0090FF' }}>
        <h6 className='m-0 raleway-700'>Categories</h6>
      </div>
      <div
        onClick={() => navigate(`/blog/categories/cryptocurrency`)}
        className='px-0py-2 raleway-400'
        style={{ fontSize: '13px', cursor: 'pointer' }}
      >
        <p>CRYPTOCURRENCY</p>
      </div>
      <hr />
      <div
        onClick={() => navigate(`/blog/categories/how-to-guide`)}
        className='px-0py-2 raleway-400'
        style={{ fontSize: '13px', cursor: 'pointer' }}
      >
        <p>HOW TO GUIDE</p>
      </div>
      <hr />
      <div
        onClick={() => navigate(`/blog/categories/lifestyle`)}
        className='px-0py-2 raleway-400'
        style={{ fontSize: '13px', cursor: 'pointer' }}
      >
        <p>LIFESTYLE</p>
      </div>
      <hr />
      <div
        onClick={() => navigate(`/blog/categories/make-money-online`)}
        className='px-0py-2 raleway-400'
        style={{ fontSize: '13px', cursor: 'pointer' }}
      >
        <p>MAKE MONEY ONLINE</p>
      </div>
      <hr />
      <div
        onClick={() => navigate(`/blog/categories/technical-analysis`)}
        className='px-0py-2 raleway-400'
        style={{ fontSize: '13px', cursor: 'pointer' }}
      >
        <p>TECHNICAL ANALYSIS</p>
      </div>
      <hr />
      <div
        onClick={() => navigate(`/blog/categories/traders-education`)}
        className='px-0py-2 raleway-400'
        style={{ fontSize: '13px', cursor: 'pointer' }}
      >
        <p>TRADERS EDUCATION</p>
      </div>
      <hr />
      <div
        onClick={() => navigate(`/blog/categories/uncategorized`)}
        className='px-0py-2 raleway-400'
        style={{ fontSize: '13px', cursor: 'pointer' }}
      >
        <p>UNCATEGORIZED</p>
      </div>
    </>
  )
}

export default Categories
