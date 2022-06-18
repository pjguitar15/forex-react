import React from 'react'
import { Form } from 'react-bootstrap'
import CountrySelect from './CountrySelect'

const ResidentialAddress = ({
  houseNumber,
  setHouseNumber,
  streetAddress,
  setStreetAddress,
  suburb,
  setSuburb,
  city,
  setCity,
  province,
  setProvince,
  postCode,
  setPostCode,
  country,
  setCountry,
}) => {
  return (
    <div className='row'>
      <Form.Group className='py-2 rubik-400 col-6'>
        <Form.Text className='text-light'>House Number</Form.Text>
        <Form.Control
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          required
          type='text'
          className='rubik-400 rounded-0 mt-2'
          placeholder='Enter your house number'
        />
      </Form.Group>
      <Form.Group className='py-2 rubik-400 col-6'>
        <Form.Text className='text-light'>Street Address</Form.Text>
        <Form.Control
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          required
          type='text'
          className='rubik-400 rounded-0 mt-2'
          placeholder='Enter your street address'
        />
      </Form.Group>{' '}
      <Form.Group className='py-2 rubik-400 col-6'>
        <Form.Text className='text-light'>
          Suburb (Leave blank if not applicable)
        </Form.Text>
        <Form.Control
          value={suburb}
          onChange={(e) => setSuburb(e.target.value)}
          type='text'
          className='rubik-400 rounded-0 mt-2'
          placeholder='Enter suburb'
        />
      </Form.Group>
      <Form.Group className='py-2 rubik-400 col-6'>
        <Form.Text className='text-light'>
          City (Leave blank if not applicable)
        </Form.Text>
        <Form.Control
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type='text'
          className='rubik-400 rounded-0 mt-2'
          placeholder='Enter your city'
        />
      </Form.Group>{' '}
      <Form.Group className='py-2 rubik-400 col-6'>
        <Form.Text className='text-light'>
          Province (Leave blank if not applicable)
        </Form.Text>
        <Form.Control
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          type='text'
          className='rubik-400 rounded-0 mt-2'
          placeholder='Enter province'
        />
      </Form.Group>
      <Form.Group className='py-2 rubik-400 col-6'>
        <Form.Text className='text-light'>Post Code</Form.Text>
        <Form.Control
          value={postCode}
          onChange={(e) => setPostCode(e.target.value)}
          required
          type='text'
          className='rubik-400 rounded-0 mt-2'
          placeholder='Enter post code'
        />
      </Form.Group>
      <CountrySelect country={country} setCountry={setCountry} />
    </div>
  )
}

export default ResidentialAddress
