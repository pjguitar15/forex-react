import React from 'react'
import { useNavigate } from 'react-router-dom'
import RoundButton from '../../../../components/blog-components/RoundButton'

const CategoryCard = ({ item }) => {
  const navigate = useNavigate()
  return (
    <div className='col-12 mx-auto p-3'>
      {/* image */}
      <div className='shadow-sm'>
        <div
          onClick={() => navigate(`/blog/${item.id}`)}
          className='col-12 blog-img-parent'
          style={{ height: '12rem' }}
        >
          <div
            // src={item.img}
            className='w-100 h-100 blog-item-img'
            style={{
              background: `url(${item.img})`,
            }}
            alt='cardItem'
          >
            <div className='inner-btn-parent w-100 text-white text-center d-flex align-items-center justify-content-center'>
              <RoundButton />
            </div>
          </div>
        </div>
        <div className='py-3 px-4'>
          {/* title */}
          <h5 className='mt-3 raleway-700 m-0 text-light'>{item.title}</h5>
          {/* by admin and date */}
          <div
            className='my-3 text-light raleway-400 d-flex justify-content-between'
            style={{ fontSize: '14px' }}
          >
            <div>
              by
              <span className='fw-bold'> {item.author}</span>
            </div>
            <div>{item.date}</div>
          </div>
          {/* content */}
          <p
            className='text-light raleway-400'
            style={{
              textAlign: 'justify',
              fontSize: '14px',
              lineHeight: '25px',
            }}
          >
            {item.content.slice(0, 200)}...
          </p>
          {/* hr */}
          <hr style={{ color: 'grey' }} />
          {/* tag icon and tag name */}
          <p
            className='text-uppercase text-light raleway-400'
            style={{ fontSize: '13px' }}
          >
            <i className='bi bi-tag me-1'></i>
            {item.tag}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
