import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import Axios from 'axios'
// context
import { useBlog } from './context/ContextProvider'

const AddItemsToFirebase = () => {
  const [titleInput, setTitleInput] = useState('')
  const [authorInput, setAuthorInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [contentInput, setContentInput] = useState('')
  const [selectInput, setSelectInput] = useState('')
  const [imageSelected, setImageSelected] = useState()

  // context
  const { createUser } = useBlog()
  const submitHandler = (e) => {
    e.preventDefault()
    // how to use axios. this is inside uploadImage function
    const formData = new FormData()
    formData.append('file', imageSelected[0])
    formData.append('upload_preset', 'forex-website-imgs')

    const cloudName = 'philcob'
    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    ).then((res) => {
      createUser(
        titleInput,
        authorInput,
        dateInput,
        contentInput,
        res.data.url,
        selectInput
      )
    }) // res.data.url takes the image url

    setTitleInput('')
    setAuthorInput('')
    setDateInput('')
    setContentInput('')
    setSelectInput('')
    setImageSelected()
  }
  return (
    <div style={{ height: '100vh' }} className='bg-white py-5'>
      <Container>
        <Form
          onSubmit={submitHandler}
          className='col-8 mx-auto border bg-light p-5'
        >
          <Form.Group className='my-3'>
            <Form.Control
              onChange={(e) => setTitleInput(e.target.value)}
              value={titleInput}
              type='text'
              placeholder='Enter title'
            />
          </Form.Group>
          <Form.Group className='my-3'>
            <Form.Control
              onChange={(e) => setAuthorInput(e.target.value)}
              value={authorInput}
              type='text'
              placeholder='Enter author'
            />
          </Form.Group>
          <Form.Group className='my-3'>
            <Form.Control
              onChange={(e) => setDateInput(e.target.value)}
              value={dateInput}
              type='text'
              placeholder='Enter date'
            />
          </Form.Group>
          <Form.Group className='my-3'>
            <Form.Control
              onChange={(e) => setContentInput(e.target.value)}
              value={contentInput}
              as='textarea'
              row={3}
              placeholder='Enter content'
            />
          </Form.Group>
          <Form.Group className='my-3'>
            <select
              onChange={(e) => setSelectInput(e.target.value)}
              class='form-select'
              aria-label='Default select example'
            >
              <option selected>Open this select menu</option>
              <option value='cryptocurrency'>Cryptocurrency</option>
              <option value='how to guide'>How to Guide</option>
              <option value='lifestyle'>Lifestyle</option>
              <option value='make money online'>Make money online</option>
              <option value='technical analysis'>Technical Analysis</option>
              <option value='traders education'>Traders Education</option>
              <option value='uncategorized'>Uncategorized</option>
            </select>
          </Form.Group>
          <Form.Group className='my-3'>
            <Form.Control
              onChange={(e) => setImageSelected(e.target.files)}
              type='file'
              placeholder='Select image'
            />
          </Form.Group>
          <Form.Group className='my-3'>
            <Button type='submit' size='sm'>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default AddItemsToFirebase
