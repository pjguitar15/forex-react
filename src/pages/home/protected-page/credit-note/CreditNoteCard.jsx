import React from 'react'
import Description from './Description'
import Footer from './Footer'
import TopSection from './TopSection'
import Totals from './Totals'

const CreditNoteCard = () => {
  return (
    <div>
      {/* Header */}
      <div className='credit-note-card-head rubik-400'>
        <h5 className='m-0 p-0'>Bullish Beast</h5>
        <h5 className='m-0 p-0'>CREDIT NOTE</h5>
      </div>
      {/* Body */}
      <div className='credit-note-card-body'>
        {/* Top section */}
        <TopSection />
        {/* Description */}
        <Description />
        <Totals />
        <Footer />
      </div>
    </div>
  )
}

export default CreditNoteCard
