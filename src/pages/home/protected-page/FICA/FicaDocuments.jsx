import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import TopButtons from '../../../../components/logged-in-components/TopButtons'
import { useNavigate } from 'react-router-dom'

import IdDocumentContent from './IdDocumentContent'
import ProofOfAddress from './ProofOfAddress'
import SelfHoldingId from './SelfHoldingId'

const FicaDocuments = () => {
  const [selectedNavLink, setSelectedNavLink] = useState('ID Document')
  const [selectedFile, setSelectedFile] = useState([])
  const [fileLoading, setFileLoading] = useState(false)
  const [previewImg, setPreviewImg] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/fica-documents')
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <div
      className='bgtext-light'
      style={{ padding: '150px 0', background: '#080808' }}
    >
      <Container>
        <TopButtons />
        <div className='bg-white text-dark shadow'>
          <div className='border p-3' style={{ color: '#ff8514' }}>
            <h6 className='m-0 p-0'>FICA Document Upload</h6>
          </div>
          <div className='row' style={{ color: '#ff8514' }}>
            <div className='m-0 text-dark pe-md-2 col-md-4'>
              <div
                onClick={() => setSelectedNavLink('ID Document')}
                className='text-dark py-2 px-2 text-center'
                style={{
                  background:
                    selectedNavLink === 'ID Document' ? '#d1d1d1' : '#f1f0f0',
                  cursor: 'pointer',
                }}
              >
                ID Document
              </div>
            </div>
            <div className='m-0 text-dark pe-md-2 col-md-4'>
              <div
                onClick={() => setSelectedNavLink('Proof of Address')}
                className='text-dark py-2 px-2 text-center'
                style={{
                  background:
                    selectedNavLink === 'Proof of Address'
                      ? '#d1d1d1'
                      : '#f1f0f0',
                  cursor: 'pointer',
                }}
              >
                Proof of Address
              </div>
            </div>
            <div className='m-0 text-dark col-md-4'>
              <div
                onClick={() =>
                  setSelectedNavLink('Picture of yourself holding your ID')
                }
                className='text-dark py-2 px-2 text-center'
                style={{
                  background:
                    selectedNavLink === 'Picture of yourself holding your ID'
                      ? '#d1d1d1'
                      : '#f1f0f0',
                  cursor: 'pointer',
                }}
              >
                Picture of yourself holding your ID
              </div>
            </div>
          </div>
          {selectedNavLink === 'ID Document' && <IdDocumentContent />}
          {selectedNavLink === 'Proof of Address' && <ProofOfAddress />}
          {selectedNavLink === 'Picture of yourself holding your ID' && (
            <SelfHoldingId />
          )}
        </div>
      </Container>
    </div>
  )
}

export default FicaDocuments
