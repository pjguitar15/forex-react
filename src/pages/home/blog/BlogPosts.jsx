import React from 'react'
import BlogCard from './BlogCard'
// import fake data
import { BlogData } from '../../../fake-data/BlogData'

const BlogPosts = () => {
  return (
    <>
      <div className='row mt-2'>
        {BlogData.slice(0, 6).map((item, index) => (
          <BlogCard key={index} item={item} />
        ))}
      </div>
    </>
  )
}

export default BlogPosts
