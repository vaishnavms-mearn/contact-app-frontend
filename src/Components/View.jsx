import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';


function View() {
  const base_url = 'http://localhost:8000'

  const [contactData, setContactData] = useState({})
  //get employee id from url
  const { id } = useParams()
  console.log(id);//
  //get a particular employee details
  const getAnContact = async (id) => {
    const result = await axios.get(`${base_url}/get-an-contact/${id}`)
    console.log(result.data.contacts);//object
    setContactData(result.data.contacts)

  }
  console.log(contactData);//object
  useEffect(() => {
    getAnContact(id)

  }, [])
  const { name, address } = contactData;
  const firstname = name?.firstname || '';
  const lastname = name?.lastname || '';
  const street = address?.street || '';
  const city = address?.city || '';
  const zipcode = address?.zipcode || '';
  return (
    <div className='d-flex justify-content-center container  my-3 view-section  p-5'>
      <Card style={{ width: '35rem',borderRadius:'20px' }} className='bg-light' >
        <h1 className='text-center text-primary m-5'>Contact Details</h1>
        <Card.Img variant="top" className='view-image' src="https://webstockreview.net/images/contact-icon-png-6.png" style={{ borderRadius: '50%', width: '100px', height: '100px', textAlign: 'center' }} />
        <Card.Body>
          <Card.Title>
          </Card.Title>
          <Card.Text>
            <div className="view-text">
              <h3 className='my-3 text-center'>{firstname.toUpperCase()} {lastname.toUpperCase()}</h3>
              <p className='text-center'><i class="fa-solid fa-envelope mx-2 "></i>{contactData.email}</p>
              <p className='text-center'><i class="fa-solid fa-phone mx-2"></i>{contactData.phone}</p>
              <p className='text-center'><i class="fa-solid fa-city mx-2"></i>{city}</p>
              <p className='text-center'><i class="fa-solid fa-street-view mx-2"></i>{street}</p>
              <p className='text-center'><i class="fa-brands fa-usps mx-2"></i>{zipcode}</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}

export default View