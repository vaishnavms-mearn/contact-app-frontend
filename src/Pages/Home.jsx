import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from '../Assets/img1.jpg'
import Devicecards from '../Components/Devicecards';
import Features from '../Components/Features';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-section">
      <div className='container my-5'>
          <Row>
            <Col sm={6} md={6}>
              <h1 className='text-primary my-5'>One place for all your contacts</h1>
              <p className='text-justify fs-4'>Manage contacts from a single place and access them everywhere together with your team.</p>
              <div className="hero-button my-5">
                <Link to={'/contacts'}>
                <button className='rounded-button'>View All Contacts</button>
                </Link>
              </div>
            </Col>
            <Col sm={6} md={6}>
              <img className='img-fluid hero-image' src={Img} alt="" height={'400px'} />
            </Col>
          </Row>
      </div>
      <div className="device-section text-center bg-primary mt-5 p-5">
        <h1 className='pt-5 text-light'>Access contacts everywhere</h1>
        <p className='text-justify text-light pt-4'>Use ContactBook platform across web, Android, iOS, Mac, Windows, Gmail and Chrome extension. All your contacts are always in sync across all devices.</p>
        <Devicecards />
      </div>
      <Features />
    </div>
  )
}

export default Home