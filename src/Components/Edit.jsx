import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
}

  from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const [cId, setId] = useState("")
  const [contactFname, setFirstName] = useState("")
  const [contactLname, setLastName] = useState("")
  const [contactEmail, setEmail] = useState("")
  const [contactPhone, setPhone] = useState("")
  const [contactCity, setCity] = useState("")
  const [contactStreet, setStreet] = useState("")
  const [contactZipcode, setZipcode] = useState("")

  //get a particular id from the url
  const { id } = useParams()
  console.log(id);//4

  //get a particular employee details
  const getanContact = async (id) => {
    const result = await axios.get(`${base_url}/get-an-contact/${id}`)//employee details
    console.log(result.data.contacts);//object
    // setEmployeeData(result.data.employees)
    setId(result.data.contacts.id)
    setFirstName(result.data.contacts.name.firstname)
    setLastName(result.data.contacts.name.lastname)
    setEmail(result.data.contacts.email)
    
    setPhone(result.data.contacts.phone)
    setStreet(result.data.contacts.address.street)
    setCity(result.data.contacts.address.city)
    setZipcode(result.data.contacts.address.zipcode)

  }
  useEffect(() => {
    getanContact(id)
  }, [])

  const location = useNavigate()

  // //update function
  const base_url = 'http://localhost:8000'
  //api call to update an employee details
  const updateContact = async (e) => {
    e.preventDefault()
    const body = {
      id: cId,
      name: {
        firstname: contactFname,
        lastname: contactLname
      },
      email: contactEmail,
      phone: contactPhone,
      address: {
        city: contactCity,
        street: contactStreet,
        zipcode: contactZipcode
      }
    }
    const result = await axios.post(`${base_url}/update-an-contact/${id}`, body)
    alert(result.data.message)
    location('/contacts')//back to contacts
  }


  return (
    <div>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Update Contact Details</h2>
            <MDBInput wrapperClass='mb-4' onChange={(e) => setId(e.target.value)} value={cId} size='lg' id='form1' type='text' readOnly />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setFirstName(e.target.value)} value={contactFname} label='First Name' size='lg' id='form2' type='text' />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setLastName(e.target.value)} value={contactLname} label='Last Name' size='lg' id='form2' type='text' />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setEmail(e.target.value)} value={contactEmail} label='Email' size='lg' id='form3' type='email' />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setPhone(e.target.value)} value={contactPhone} label='Phone' size='lg' id='form3' type='email' />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setCity(e.target.value)} value={contactCity} label='City' size='lg' id='form3' type='email' />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setStreet(e.target.value)} value={contactStreet} label='Street' size='lg' id='form3' type='email' />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setZipcode(e.target.value)} value={contactZipcode} label='Zipcode' size='lg' id='form3' type='email' />
            <MDBBtn onClick={(e) => updateContact(e)} className='mb-4 w-100 gradient-custom-4' size='lg'>Update</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  )
}

export default Edit