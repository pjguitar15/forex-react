import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap'

const ToolsDropdown = ({
  setIsMobileToolsClicked,
  isMobileToolsClicked,
  windowDimension,
  setIsToggled,
}) => {
  const navigate = useNavigate()
  return (
    <div
      className='tools-parent-dropdown'
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <div
        onClick={() => setIsMobileToolsClicked(!isMobileToolsClicked)}
        className={`link-style live-market-link montserrat mx-3 text-white`}
        style={{
          fontSize: '14px',
          zIndex: '1',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        Tools <i className='ms-1 bi bi-chevron-down'></i>
      </div>
      {/* Dropdown menu here only show on medium device */}
      {windowDimension.winWidth >= 992 ? (
        <div
          className='tools-dropdown'
          style={{
            width: '18rem',
          }}
        >
          <div
            onClick={() => navigate('/currency-converter')}
            className='my-sub-menu mx-auto py-2 px-4 w-100 bg-dark shadow'
            style={{ cursor: 'pointer' }}
          >
            Currency Converter
          </div>
          <div
            onClick={() => navigate('/compounding-calculator')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark shadow'
            style={{ cursor: 'pointer' }}
          >
            Compounding Calculator
          </div>
          {/* <div
            onClick={() => navigate('/trading-academy')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark shadow'
            style={{ cursor: 'pointer' }}
          >
            Trading Academy{' '}
            <Badge bg='warning' className='text-dark'>
              Try now!
            </Badge>
          </div> */}
          {/* <div
            // onClick={() => navigate('/compounding-calculator')}
            className='py-1 my-sub-menu px-4 mx-auto w-100 bg-dark shadow'
            style={{ cursor: 'pointer' }}
          >
            Bible Verses
          </div> */}
        </div>
      ) : (
        // MOBILE VIEW
        <div
          className={`my-dropdown-mb rounded`}
          style={{
            width: '100%',
            display: isMobileToolsClicked ? 'block' : 'none',
            transition: 'all 0.3s ease-in-out',
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
          </div>{' '}
          {/* <div
            onClick={() => {
              navigate('/trading-academy')
              setIsToggled(false)
              setIsMobileToolsClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Trading Academy{' '}
            <Badge bg='warning' className='text-dark'>
              Try now!
            </Badge>
          </div>{' '} */}
          {/* <div
            onClick={() => {
              navigate('/compounding-calculator')
              setIsToggled(false)
              setIsMobileToolsClicked(false)
            }}
            className='py-1 my-sub-menu-mb px-4 mx-auto w-100 bg-dark'
            style={{ cursor: 'pointer' }}
          >
            Bible Verses
          </div> */}
        </div>
      )}
    </div>
  )
}

export default ToolsDropdown
