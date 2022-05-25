import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
// assets
import cardImg from '../../../assets/card-img.jpg'
// import sections
import BreadCrumbs from './BreadCrumbs'
import DisplayCurrentItem from './DisplayCurrentItem'
import Categories from './Categories'
// import fake data
import { BlogData } from '../../../fake-data/BlogData'
const BlogSlug = () => {
  const [currentData, setCurrentData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const filtered = BlogData.filter((item) => id === item.id)
    setCurrentData(filtered[0])
  }, [])
  return (
    <div className='bg-white' style={{ height: '200vh' }}>
      {/* BlogPost breadcrumbs section */}
      <BreadCrumbs id={id} />
      <Container>
        <div className='row py-5'>
          <div className='col-lg-9 pe-5'>
            <DisplayCurrentItem currentData={currentData} />
          </div>
          <div className='col-lg-3 p-0'>
            <Categories />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BlogSlug
