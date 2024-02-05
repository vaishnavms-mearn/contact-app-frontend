import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import axios from 'axios'
function Contacts() {

  const base_url = 'http://localhost:8000'

  //state creation
  const [allContacts, setAllContacts] = useState([])//To hold all employees details

  const fetchData = async () => {
    const result = await axios.get(`${base_url}/get-all-contacts`)// details from server
    console.log(result.data.contacts);//object->Array of employees
    setAllContacts(result.data.contacts)
  }
  const deleteContact = async (id) => {
    const result = await axios.delete(`${base_url}/delete-an-contact/${id}`)
    console.log(result)
    alert(result.data.message)
    fetchData()
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='container my-5'>
      <MDBTable responsive align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>City</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
            allContacts.map((item) => (
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='https://th.bing.com/th/id/OIP.Z2hJrVQekPTPlY2jPk16RQHaHa?rs=1&pid=ImgDetMain'
                      alt=''
                      style={{ width: '45px', height: '45px' }}
                      className='rounded-circle'
                    />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>{item.name.firstname} {item.name.lastname}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{item.email}</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{item.phone}</p>
                </td>
                <td><p className='fw-normal mb-1'>{item.address.city}</p></td>
                <td>
                  <div className='d-flex justify-content-evenly'>
                    <Link to={`view/${item.id}`}>
                      <i class="fa-solid fa-eye fs-5 mx-2"></i>
                    </Link>
                    <Link to={`edit/${item.id}`}>
                      <i className='fa-solid fa-pen text-primary mx-2'></i>
                    </Link>
                    <i onClick={() => deleteContact(item.id)} className='fa-solid fa-trash text-danger fs-5 mx-2'></i>
                  </div>
                </td>
              </tr>
            ))}
        </MDBTableBody>
      </MDBTable>
      <Link to={'/contacts/add'}>
        <div className="add-button text-center my-3">
          <button type='' className='rounded-button '>Add Contact</button>
        </div>
      </Link>

    </div>
  )
}

export default Contacts