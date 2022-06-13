import React from 'react'
import alpari from '../../assets/broker-logos/alpari.png'
import avatrade from '../../assets/broker-logos/avatrade.jpg'
import exness from '../../assets/broker-logos/exness.png'
import fbs from '../../assets/broker-logos/fbs-logo.jpg'
import globex360 from '../../assets/broker-logos/Globex360-Logo.png'
import gvMarkets from '../../assets/broker-logos/gv-markets.png'
import hotForex from '../../assets/broker-logos/hotforex-logo.png'
import ifxBrokers from '../../assets/broker-logos/ifx-brokers.png'
import thinkMarkets from '../../assets/broker-logos/think-markets.png'
import tickmill from '../../assets/broker-logos/tickmill.png'
import xm from '../../assets/broker-logos/xm-logo.png'

const LogosIb = () => {
  return (
    <div className='row mt-5'>
      <div
        className='col-6 col-sm-3 col-lg-2 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-2 rounded'
          src={alpari}
          alt='logo'
        />
      </div>
      <div
        className='col-6 col-sm-3 col-lg-2 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-2 rounded'
          src={avatrade}
          alt='logo'
        />
      </div>
      <div
        className='col-sm-8 col-lg-5 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-1 rounded'
          style={{ objectFit: 'cover' }}
          src={exness}
          alt='logo'
        />
      </div>
      <div
        className='col-5 col-sm-3 col-lg-2 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-1 rounded'
          style={{ objectFit: 'cover' }}
          src={fbs}
          alt='logo'
        />
      </div>{' '}
      <div
        className='col-9 col-sm-6 col-lg-4 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-1 rounded'
          style={{ objectFit: 'cover' }}
          src={globex360}
          alt='logo'
        />
      </div>{' '}
      <div
        className='col-7 col-sm-4 col-lg-3 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-1 rounded'
          style={{ objectFit: 'cover' }}
          src={gvMarkets}
          alt='logo'
        />
      </div>
      <div
        className='col-6 col-sm-3 col-lg-2 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-1 rounded'
          style={{ objectFit: 'cover' }}
          src={hotForex}
          alt='logo'
        />
      </div>
      <div
        className='col-10 col-sm-6 col-lg-3 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-1 rounded'
          style={{ objectFit: 'cover' }}
          src={ifxBrokers}
          alt='logo'
        />
      </div>
      <div
        className='col-7 col-sm-5 col-lg-3 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-1 rounded'
          style={{ objectFit: 'cover' }}
          src={thinkMarkets}
          alt='logo'
        />
      </div>
      <div
        className='col-7 col-sm-5 col-lg-3 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-1 rounded'
          style={{ objectFit: 'cover' }}
          src={tickmill}
          alt='logo'
        />
      </div>
      <div
        className='col-8 col-sm-5 col-lg-5 p-2 ib-logo'
        onClick={() => alert('still working on this part. thanks!')}
      >
        <img
          className='w-100 h-100 bg-white p-3 rounded'
          style={{ objectFit: 'cover' }}
          src={xm}
          alt='logo'
        />
      </div>
    </div>
  )
}

export default LogosIb
