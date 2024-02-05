import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}

from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {
  const location=useNavigate()//hook for redirection to a page
const[id,setId]=useState("")
const[firstname,setFirstName]=useState("")
const[lastname,setLastName]=useState("")
const[email,setEmail]=useState("")
const[phone,setPhone]=useState("")
const[city,setCity]=useState("")
const[street,setStreet]=useState("")
const[zipcode,setZipcode]=useState("")
const base_url='http://localhost:8000/add-an-contact'
const addContact=async(e)=>{
e.preventDefault()
console.log(id,firstname,lastname,email,phone,city,street,zipcode);
//api call to add employee details to mongodb
const body={
  id,name:{
    firstname,lastname
  },email,phone,address:{
    city,street,zipcode
  }
}



const result=await axios.post(base_url,body).then((result)=>{
  console.log(result);
  alert(result.data.message)
  location('/contacts')//redirect to admin page
}).catch((error=>{
  alert("Please enter unique id")
}))
console.log(result);
}
  return (
    <div>
     <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Add Contact Details</h2>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setId(e.target.value)} label='Id' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setFirstName(e.target.value)}  label='First Name' size='lg' id='form2' type='text'/>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setLastName(e.target.value)}  label='Last Name' size='lg' id='form2' type='text'/>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setEmail(e.target.value)}   label='Email' size='lg' id='form3' type='email'/>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setPhone(e.target.value)} label='Phone' size='lg' id='form3' type='email'/>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setCity(e.target.value)} label='City' size='lg' id='form3' type='email'/>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setStreet(e.target.value)} label='Street' size='lg' id='form3' type='email'/>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setZipcode(e.target.value)} label='Zipcode' size='lg' id='form3' type='email'/>
          <MDBBtn onClick={(e)=>addContact(e)} className='mb-4 w-100 gradient-custom-4' size='lg'>Add</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  )
}

export default Add