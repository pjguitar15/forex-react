import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <div
      className='bg-dark d-flex align-items-center justify-content-center'
      style={{ height: '100vh' }}
    >
      <Container>
        <h1 className='text-light text-center'>About Page</h1>
        <p className='text-light text-center col-lg-8 mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          itaque, illum laborum debitis ea veritatis maxime nemo consequatur
          maiores pariatur dolore, natus ducimus rem mollitia qui culpa!
          Aliquid, delectus ex?
        </p>
      </Container>
    </div>
  )
}

export default About
