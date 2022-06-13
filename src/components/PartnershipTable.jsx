import React from 'react'
import { Table } from 'react-bootstrap'

const PartnershipTable = () => {
  return (
    <div>
      <Table striped bordered hover className='table-dark'>
        <thead>
          <tr>
            <th>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='orange'
                className='bi bi-check2 me-2'
                viewBox='0 0 16 16'
              >
                <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
              </svg>
              Forex Broker Name
            </th>
            <th>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='orange'
                className='bi bi-bar-chart-line me-2'
                viewBox='0 0 16 16'
              >
                <path d='M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z' />
              </svg>
              Leverage
            </th>
            <th>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='orange'
                className='bi bi-graph-up-arrow me-2'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z'
                />
              </svg>
              FCSA / FSP nr.
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Avatrade</td>
            <td>1 : 400</td>
            <td>FCSA No.45984</td>
          </tr>
          <tr>
            <td>Hotforex</td>
            <td>1 : 1000</td>
            <td>FCSA No. 46632</td>
          </tr>
          <tr>
            <td>FBS</td>
            <td>1 : 3000</td>
            <td>FCSA No. 50885</td>
          </tr>
          <tr>
            <td>Tickmill</td>
            <td>1 : 500</td>
            <td>FCSA No. 49464</td>
          </tr>
          <tr>
            <td>Exness</td>
            <td>1 : Unlimited</td>
            <td>FCSA No. 51024</td>
          </tr>
          <tr>
            <td>XM</td>
            <td>1 : 888</td>
            <td>FCSA No. 49976</td>
          </tr>
          <tr>
            <td>IFX Brokers</td>
            <td>1 : 1000</td>
            <td>FCSA No. 48021</td>
          </tr>
          <tr>
            <td>GlobeX360</td>
            <td>1 : 100</td>
            <td>FCSA No. 50130</td>
          </tr>
          <tr>
            <td>GV Markets</td>
            <td>1 : 500</td>
            <td>FCSA No. 49213</td>
          </tr>
          <tr>
            <td>Alpari</td>
            <td>1 : 400</td>
            <td>FCSA No. 50320</td>
          </tr>
          <tr>
            <td>ThinkMarkets</td>
            <td>1 : 777</td>
            <td>FCSA No. 49835</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default PartnershipTable
