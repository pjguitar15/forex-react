import React from 'react'
// import sections
import Jumbotron from './Jumbotron'
import BlogSection from './blog/BlogSection'

const Home = () => {
  return (
    <div>
      <Jumbotron />
      {/* Test scroll */}
      <BlogSection />
    </div>
  )
}

export default Home
