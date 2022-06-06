import React from 'react'
// import sections
import Jumbotron from './Jumbotron'
import BlogSection from './blog/BlogSection'
import TickerTape from '../../components/TickerTape'

const Home = () => {
  return (
    <div>
      <Jumbotron />
      {/* Test scroll */}
      <BlogSection />
      <TickerTape />
    </div>
  )
}

export default Home
