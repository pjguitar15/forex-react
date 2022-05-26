import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark p-5 text-white text-center'>
      <p
        className='raleway-400 mb-3'
        style={{ color: '#999999', fontSize: '12px' }}
      >
        Risk Warning: Trading leveraged products such as CFDs involves
        substantial risk of loss and may not be suitable for all investors.
        Trading such products is risky and your losses may exceed your invested
        capital. Please read and ensure you fully understand our Risk
        Disclosure. We recommend that you only trade with amounts on which you
        are willing to accept the risk of losses. Past returns are no guarantee
        of future returns.
      </p>
      <p
        className='raleway-400 m-0'
        style={{ color: '#999999', fontSize: '12px' }}
      >
        Restricted Regions: Bullish Beast does not provide services for
        citizens/residents of certain regions, such as Canada, Cuba, Iran, Iraq,
        Myanmar, North Korea, Sudan, Syria, The United States. We Only accept
        New Zealand clients who are defined as ‘Wholesale Investor’ or ‘Eligible
        Investor’ as per New Zealand law for Financial Services Providers Act
        FSPA 2008.
      </p>
      {/* All raleway, Size 12px, 22px line height, Color: #999999 */}
    </div>
  )
}

export default Footer
