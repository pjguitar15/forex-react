import React from 'react'

const Totals = () => {
  return (
    <div className='col-md-5 ms-auto p-3 rubik-400'>
      <h3>Totals</h3>
      <div className='row'>
        <div className='border col-6 p-3'>
          <div style={{ color: 'orange' }}>Subtotal</div>
          <div style={{ color: 'orange' }}>
            Tax <span className='text-muted'>(Sales tax 0.7%)</span>
          </div>
          <div style={{ color: 'orange' }}>Total</div>
        </div>
        <div className='border col-6 p-3'>
          <div>$10.00</div>
          <div>-$0.70</div>
          <div>-$10.70</div>
        </div>
      </div>
    </div>
  )
}

export default Totals
