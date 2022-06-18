import React from 'react'
import { useNavigate } from 'react-router-dom'

const ToolsDropdown = ({
  setIsMobileToolsClicked,
  isMobileToolsClicked,
  windowDimension,
  setIsToggled,
}) => {
  const navigate = useNavigate()
  return (
    <div
      className='parent-dropdown'
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <div
        onClick={() => setIsMobileToolsClicked(!isMobileToolsClicked)}
        className={`link-style live-market-link montserrat mx-3 text-white`}
        style={{
          fontSize: '14px',
          zIndex: '1',
          cursor: 'pointer',
          transition: 'all 0.3 ease-in-out',
        }}
      >
        Tools <i className='ms-1 bi bi-chevron-down'></i>
      </div>
      {/* Dropdown menu here only show on medium device */}
      {windowDimension.winWidth >= 992 ? (
        <div
          className='my-dropdown rounded'
          style={{
            width: '15rem',
          }}
        >
          <div
            onClick={() => navigate('/currency-converter')}
            className='py-2 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Currency Converter
          </div>
          <div
            onClick={() => navigate('/compounding-calculator')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Compounding Calculator
          </div>
        </div>
      ) : (
        // MOBILE VIEW
        <div
          className={`my-dropdown-mb rounded`}
          style={{
            width: '15rem',
            display: isMobileToolsClicked ? 'block' : 'none',
          }}
        >
          <div
            onClick={() => {
              navigate('/currency-converter')
              setIsToggled(false)
              setIsMobileToolsClicked(false)
            }}
            className='py-2 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Currency Converter
          </div>
          <div
            onClick={() => {
              navigate('/compounding-calculator')
              setIsToggled(false)
              setIsMobileToolsClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Compounding Calculator
          </div>
        </div>
      )}
    </div>
  )
}

export default ToolsDropdown
