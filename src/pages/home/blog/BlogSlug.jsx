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
// import firebase
import { useBlog } from '../../../context/ContextProvider'
const BlogSlug = () => {
  const { firebaseData, loading } = useBlog()
  const { id } = useParams()
  return (
    <div className='bg-white pb-5'>
      {/* BlogPost breadcrumbs section */}
      <BreadCrumbs id={id} />
      <Container>
        <div className='row py-5'>
          <div className='col-lg-9 pe-5'>
            <DisplayCurrentItem loading={loading} firebaseData={firebaseData} />
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
