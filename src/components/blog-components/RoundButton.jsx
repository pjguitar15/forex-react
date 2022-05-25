import React from 'react'

const RoundButton = () => {
  const styles = { background: 'none', border: 'none' }
  return (
    <>
      <button style={styles}>
        <i
          style={{ fontSize: '40px' }}
          className='bi bi-link-45deg text-white'
        ></i>
      </button>
    </>
  )
}

export default RoundButton
