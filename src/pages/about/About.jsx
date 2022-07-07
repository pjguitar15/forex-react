import React from 'react'
import { Container } from 'react-bootstrap'
// sections
import AboutSection from './AboutSection'
import KeyFeatures from './KeyFeatures'
import TrackRecord from './TrackRecord'
import Team from './Team'

const About = () => {
  return (
    <div
    // className='bg-black'
    >
      <AboutSection />
      <KeyFeatures />
      <TrackRecord />
      {/* <Team /> */}
    </div>
  )
}

export default About
