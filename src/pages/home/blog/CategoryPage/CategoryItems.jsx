import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

// related pages
import Categories from '../Categories'
import CategoryCard from './CategoryCard'
import CategoryBreadcrumbs from './CategoryBreadcrumbs'

// import context
import { useBlog } from '../../../../context/ContextProvider'

const CategoryItems = () => {
  const { firebaseData, loading } = useBlog()
  const { id } = useParams()
  return (
    <div style={{ background: '#080808' }} className='text-light'>
      <CategoryBreadcrumbs
        firebaseData={firebaseData}
        loading={loading}
        id={id}
      />
      <Container>
        <div className='row'>
          <div className='col-md-9'>
            {/* Category Cards here */}
            <div className='row py-5'>
              {loading ? (
                <div className='text-center mb-5'>
                  <Spinner animation='border' size='lg' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </Spinner>
                </div>
              ) : (
                firebaseData
                  .filter((item) => {
                    if (id === 'how-to-guide') {
                      return item.tag === 'how to guide'
                    }
                    if (id === 'traders-education') {
                      return item.tag === 'traders education'
                    }
                    if (id === 'make-money-online') {
                      return item.tag === 'make money online'
                    }
                    if (id === 'technical-analysis') {
                      return item.tag === 'technical analysis'
                    }
                    if (id === 'uncategorized') {
                      return item.tag === 'uncategorized'
                    }
                    if (id === 'cryptocurrency') {
                      return item.tag === 'cryptocurrency'
                    }
                    if (id === 'lifestyle') {
                      return item.tag === 'lifestyle'
                    }
                  })
                  .map((item, index) => (
                    <CategoryCard item={item} key={index} />
                  ))
              )}
            </div>
          </div>
          <div className='col-12 col-md-3 mt-3 mb-5 mb-md-0 py-5'>
            {/* Category list on the right */}
            <Categories />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryItems
