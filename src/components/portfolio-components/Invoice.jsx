import React from 'react'
import useGetDataFromEmail from '../../custom-hooks/useGetDataFromEmail'
import { Badge } from 'react-bootstrap'

const Invoice = () => {
  const [data, loading] = useGetDataFromEmail()
  return (
    <div>
      <div className='my-5 border bg-light  text-dark'>
        <div className='border p-3' style={{ color: 'orange' }}>
          <h6 className='m-0 p-0'>Invoice</h6>
        </div>
        <div className='p-4'>
          <h1 className='rubik-400'>Invoice</h1>
          <div className='rubik-400'>
            Status:{' '}
            {!data.isPaid ? (
              <Badge className='my-2 text-dark' bg='warning'>
                Waiting for payment
              </Badge>
            ) : (
              ''
            )}
            {data.isPaid ? (
              <Badge className='my-2' bg='success'>
                Paid
              </Badge>
            ) : (
              ''
            )}
          </div>

          <div className='row'>
            {/* From contents */}
            <div className='col-lg-4 mb-4 rubik-400'>
              <div className='rubik-400 fw-bold'>FROM</div>
              <hr />
              <div className='my-2'>Bullish Beast (PTY) LTD - Rocket</div>
              <div className='my-2'>Financial Investment Traders (Pty) Ltd</div>
              <div className='my-2'>2015/219991/07 - RFIT</div>
              <div className='my-2'>2021/815120/07 - BEAST</div>
              <div className='my-2'>VAT - 9024371297</div>
              <div className='my-2'>N12 Hampton Place -</div>
              <div className='my-2'>Parklands -</div>
              <div className='my-2'>Cape Town</div>
              <div className='my-2'>7441</div>
            </div>
            {/* Bill to contents */}
            <div className='col-lg-4 rubik-400'>
              <div className='rubik-400 fw-bold'>BILL TO</div>
              <hr />
              <div className='text-capitalize my-2'>
                {data ? data.firstName : ''} {loading ? 'Loading...' : ''}
                {data ? data.lastName : ''}
              </div>
              <div className='text-capitalize my-2'>
                {data ? data.identificationNumber : ''}{' '}
                {loading ? 'Loading...' : ''}
              </div>
              <div className='text-capitalize my-2'>
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
            <div className='col-lg-4 rubik-400'>
              <div className='rubik-400 fw-bold' style={{ opacity: '0' }}>
                2
              </div>
              <hr />
              <div className='text-uppercase my-2 d-flex justify-content-between'>
                <div className='fw-bold'>INVOICE #</div>
                <div>{data.invoiceNumber}</div>
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
          <div className='row rubik-400'>
            <div className='col-md-10 mb-5'>
              <div className='fw-bold'>Description</div>
              <hr />
              <div>Corporate - www.axi.com/int</div>
              <div>Portfolio Number : 6046479</div>
              <div>
                {data ? data.firstName : ''} {loading ? 'Loading...' : ''}
                {data ? data.lastName : ''}
              </div>
              <div>
                8703195057089{' '}
                <span className='bg-danger text-light'>
                  (What data is this???)
                </span>
              </div>
              <div>
                Payment made 24/05/2022 * 10.000ZAR{' '}
                <span className='bg-danger text-light'>
                  (If user isn't paid yet, what should be here??)
                </span>
              </div>
              <div>
                exchange standard premium * $24.08{' '}
                <span className='bg-danger text-light'>
                  (What data is this???)
                </span>
              </div>
              <div>
                Recall Sars - Remote Call{' '}
                <span className='bg-danger text-light'>
                  (What data is this???)
                </span>
              </div>
              <div>
                FICA DOCS:{' '}
                <Badge className='my-2 text-dark' bg='warning'>
                  No approved yet
                </Badge>
                <Badge className='my-2 text-light' bg='success'>
                  Approved
                </Badge>
              </div>
              <div>Premium Investment Portfolio</div>
              <div>
                Total Investment{' '}
                <Badge className='my-2 text-dark' bg='warning'>
                  $3000
                </Badge>
                <span className='bg-danger text-light'>
                  (They have to invest first?)
                </span>
              </div>
              <div>
                Recall Sars - FICA{' '}
                <span className='bg-danger text-light'>
                  (What data is this???)
                </span>
              </div>
              <div>
                Credit Note Actioned{' '}
                <Badge className='my-2 text-dark' bg='warning'>
                  $2361.80
                </Badge>
                <span className='bg-danger text-light'>
                  (How to dermine credit not actioned amount?)
                </span>
              </div>
              <div>
                Outstanding Amount{' '}
                <Badge className='my-2 text-dark' bg='warning'>
                  37007.45 ZAR
                </Badge>
                <span className='bg-danger text-light'>
                  (How to dermine outstanding amount?)
                </span>
              </div>
              <div>
                50% ROI Towards Credit Note{' '}
                <span className='bg-danger text-light'>
                  (What data is this???)
                </span>
              </div>
              <div>
                3049fsca-audio attached * Compliance Actioned{' '}
                <span className='bg-danger text-light'>
                  (What data is this???)
                </span>
              </div>
              <div>
                Credit Note Actioned {data ? data.firstName : ''}{' '}
                {loading ? 'Loading...' : ''}
                {data ? data.lastName : ''}
              </div>
              <div>
                Credit Note Approved * {data ? data.firstName : ''}{' '}
                {loading ? 'Loading...' : ''}
                {data ? data.lastName : ''}
              </div>
              <div>
                FICA DOCS:{' '}
                <Badge className='my-2 text-dark' bg='warning'>
                  No approved yet
                </Badge>
              </div>
              <div>Premium Investment Portfolio</div>
            </div>
            <div className='col-md-2'>
              <div className='fw-bold'>Amount </div>
              <hr />
              <div>47,007.51 </div>
              <span className='bg-danger text-light'>
                (How do we determine the amount???)
              </span>
            </div>
          </div>

          {/* Exchange fees */}
          <div className='row rubik-400'>
            <div className='col-md-10'>
              <div>Exchange Fee $24.08</div>
            </div>
            <div className='col-md-2'>
              <div>377.31</div>
            </div>
          </div>

          <hr />
          <div className='row rubik-400'>
            <div className='col-md-8'>
              <h2>TOTAL</h2>
            </div>
            <div className='col-md-4'>
              <h2>47,384.82 ZAR</h2>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className='rubik-400 px-3 pb-4'>
          <div className='fw-bold'>TERMS & CONDITIONS</div>
          <div>Payment is due on date of issue 2-24hrs</div>
          <div>* pending deposit. </div>
          <div>Bank Name: Standard Bank Business </div>
          <div>Account Name: BULLISH BEAST (PTY) LTD</div>
          <div>Account Number: 10165662458</div>
          <div>Branch: BAYSIDE</div>
          <div>Branch Code: 022209</div>
          <div>Ref no: PORTFL6479</div>
          <div>
            (Generated Ref no; please refer to agent for complete reference)
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice
