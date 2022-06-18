import React from 'react'
import useGetDataFromEmail from '../../custom-hooks/useGetDataFromEmail'

const Invoice = () => {
  const [data, loading] = useGetDataFromEmail()
  return (
    <div>
      <div className='my-5 border p-4'>
        <h1 className='rubik-400 mb-5'>Invoice</h1>

        <div className='row'>
          {/* From contents */}
          <div className='col-lg-4 mb-4'>
            <div className='rubik-400 fw-bold'>FROM</div>
            <hr />
            <div className='text-uppercase my-2'>
              Bullish Beast (PTY) LTD - Rocket
            </div>
            <div className='text-uppercase my-2'>
              FINANCIAL INVESTMENT TRADERS (Pty) Ltd
            </div>
            <div className='text-uppercase my-2'>2015/219991/07 - RFIT</div>
            <div className='text-uppercase my-2'>2021/815120/07 - BBEAST</div>
            <div className='text-uppercase my-2'>VAT - 9024371297</div>
            <div className='text-uppercase my-2'>N12 HAMPTON PLACE -</div>
            <div className='text-uppercase my-2'>PARKLANDS -</div>
            <div className='text-uppercase my-2'>CAPE TOWN</div>
            <div className='text-uppercase my-2'>7441</div>
          </div>
          {/* Bill to contents */}
          <div className='col-lg-4'>
            <div className='rubik-400 fw-bold'>BILL TO</div>
            <hr />
            <div className='text-uppercase my-2'>
              {data ? data.firstName : ''} {loading ? 'Loading...' : ''}
              {data ? data.lastName : ''}
            </div>
            <div className='text-uppercase my-2'>
              {data ? data.identificationNumber : ''}{' '}
              {loading ? 'Loading...' : ''}
            </div>
            <div className='text-uppercase my-2'>
              {data.houseNumber}, {data.streetAddress}, {data.suburb}
              {data.suburb ? ', ' : ''}
              {data.city}
              {data.city ? ', ' : ''}
              {data.province}
              {data.province ? ', ' : ''}
              {data.postCode}, {data.country} {loading ? 'Loading...' : ''}
            </div>
          </div>

          {/* 3rd column */}
          <div className='col-lg-4'>
            <div className='rubik-400 fw-bold' style={{ opacity: '0' }}>
              2
            </div>
            <hr />
            <div className='text-uppercase my-2 d-flex justify-content-between'>
              <div className='fw-bold'>INVOICE #</div>
              <div>901022</div>
            </div>
            <div className='text-uppercase my-2 d-flex justify-content-between mb-5'>
              <div className='fw-bold'>INVOICE DATE</div>
              <div>
                {data ? data.dateCreated : ''} {loading ? 'Loading...' : ''}
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        {/* Description */}
        <div className='row'>
          <div className='col-md-10 mb-5'>
            <div className='fw-bold'>Description</div>
            <hr />
            <div>CORPORATE - www.axi.com/int</div>
            <div>PORTFOLIO NUMBER : 6046479</div>
            <div>THEO WILLIAM ABRAHAM LINGEVELDT </div>
            <div>8703195057089</div>
            <div>Payment made 24/05/2022 * 10.000ZAR</div>
            <div>exchange standard premium * $24.08</div>
            <div>RECALL SARS - REMOTE CALL</div>
            <div>FICA DOCS: Approved</div>
            <div>*PREMIUM INV PORTFOLIO</div>
            <div>TOTAL INVESTMENT $3000</div>
            <div>RECALL SARS - FICA</div>
            <div>CREDIT NOTE ACTIONED * $2361.80</div>
            <div>OUTSTANDING AMOUNT * 37007.45ZAR</div>
            <div>50%ROI TOWARDS CREDIT NOTE</div>
            <div>3049fsca-audio attached * COMPLIANCE ACTIONED</div>
            <div>CREDIT NOTE ACTIONED * MR MH VAUGHAN </div>
            <div>CREDIT NOTE APPROVED * MR RR VAUGHAN</div>
            <div>FICA DOCS: Approved</div>
            <div>*PREMIUM INV PORTFOLIO</div>
          </div>
          <div className='col-md-2'>
            <div className='fw-bold'>Amount</div>
            <hr />
            <div>47,007.51</div>
          </div>
        </div>

        {/* Exchange fees */}
        <div className='row'>
          <div className='col-md-10'>
            <div>Exchange Fee $24.08</div>
          </div>
          <div className='col-md-2'>
            <div>377.31</div>
          </div>
        </div>

        <hr />
        <div className='row'>
          <div className='col-md-8'>
            <h1>TOTAL</h1>
          </div>
          <div className='col-md-4'>
            <h1>47,384.82 ZAR</h1>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div>
        <div className='fw-bold'>TERMS & CONDITIONS</div>
        <div>TERMS & CONDITIONS</div>
        <div>Payment is due on date of issue 2-24hrs</div>
        <div>* pending deposit. </div>
        <div>Bank Name : Standard Bank Business </div>
        <div>Account Name :BULLISH BEAST (PTY) LTD</div>
        <div>Account Number:10165662458</div>
        <div>Branch:BAYSIDE</div>
        <div>Branch Code:022209</div>
        <div>Ref no:PORTFL6479</div>
        <div>
          (Generated Ref no; please refer to agent for complete reference)
        </div>
      </div>
    </div>
  )
}

export default Invoice
