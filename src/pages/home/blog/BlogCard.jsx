import React from 'react'
import RoundButton from '../../../components/blog-components/RoundButton'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const BlogCard = ({ item, loading }) => {
  const navigate = useNavigate()
  return (
    <div className='col-lg-4 col-md-6 mx-auto my-3'>
      <div
        onClick={() => navigate(`/blog/${item.id}`)}
        className='col-12 blog-img-parent blog-item-img'
        style={{ height: '12rem' }}
      >
        {/* image */}
        <LazyLoadImage
          style={{ objectFit: 'cover' }}
          height={'100%'}
          width={'100%'}
          alt={item.img}
          effect='blur'
          src={item.img}
        />
        <div className='inner-btn-parent w-100 text-white text-center d-flex align-items-center justify-content-center'>
          <RoundButton />
        </div>
      </div>
      {/* title */}
      <h5 className='mt-3 raleway-700 m-0 text-white'>{item.title}</h5>
      {/* by admin and date */}
      <div
        className='my-3 text-white raleway-400 d-flex justify-content-between'
        style={{ fontSize: '14px' }}
      >
        <div>
          by <span className='fw-bold'>{item.author}</span>
        </div>
        <div>{item.date}</div>
      </div>
      {/* content */}
      <p
        className='text-white raleway-400'
        style={{ textAlign: 'justify', fontSize: '14px', lineHeight: '25px' }}
      >
        {item.content.slice(0, 200)}...
      </p>
      {/* hr */}
      <hr style={{ color: 'white' }} />
      {/* tag icon and tag name */}
      <p
        className='text-uppercase text-white raleway-400'
        style={{ fontSize: '13px' }}
      >
        <i className='bi bi-tag me-1'></i>
        {item.tag}
      </p>
    </div>
  )
}

export default BlogCard
