import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
// import sections
import BreadCrumbs from './BreadCrumbs'
import DisplayCurrentItem from './DisplayCurrentItem'
import Categories from './Categories'
import RelatedPosts from './RelatedPosts'
// import firebase
import { useBlog } from '../../../context/ContextProvider'
const BlogSlug = () => {
  const { firebaseData, loading } = useBlog()
  const { id } = useParams()
  return (
    <div className='text-light' style={{ background: '#080808' }}>
      {/* BlogPost breadcrumbs section */}
      <BreadCrumbs id={id} />
      <Container>
        <div className='row py-5'>
          <div className='col-lg-9 pe-md-5'>
            <DisplayCurrentItem loading={loading} firebaseData={firebaseData} />
            <hr className='my-5' />
            <RelatedPosts />
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
