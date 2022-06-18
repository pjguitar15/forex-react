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
import LogoCard from './LogoCard'

const LogosIb = () => {
  return (
    <div className='row mt-5'>
      <LogoCard
        name='Avatrade'
        img={avatrade}
        leverage='1 : 400'
        fcsa='No.45984'
      />
      <LogoCard
        name='Hotforex'
        img={hotForex}
        leverage='1 : 1000'
        fcsa='No.46632'
      />
      <LogoCard name='FBS' img={fbs} leverage='1 : 3000' fcsa='No.50885' />
      <LogoCard
        name='Tickmill'
        img={tickmill}
        leverage='1 : 500'
        fcsa='No.49464'
      />
      <LogoCard
        name='Exness'
        img={exness}
        leverage='1 : Unlimited'
        fcsa='No.51024'
      />
      <LogoCard name='XM' img={xm} leverage='1 : 888' fcsa='No.49976' />
      <LogoCard
        name='IFX Brokers'
        img={ifxBrokers}
        leverage='1 : 1000'
        fcsa='No.48021'
      />
      <LogoCard
        name='GlobeX360'
        img={globex360}
        leverage='1 : 100'
        fcsa='No.50130'
      />
      <LogoCard
        name='GV Markets'
        img={gvMarkets}
        leverage='1 : 500'
        fcsa='No.49213'
      />
      <LogoCard
        name='Alpari'
        img={avatrade}
        leverage='1 : 400'
        fcsa='No.50320'
      />
      <LogoCard
        name='ThinkMarkets'
        img={thinkMarkets}
        leverage='1 : 777'
        fcsa='No.49835'
      />
    </div>
  )
}

export default LogosIb
