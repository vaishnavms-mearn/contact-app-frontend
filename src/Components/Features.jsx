import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Features() {
    return (
        <div className='features'>
            <Container>
                <Row>
                    <Col className='features-col mt-5' xs={12} md={6} lg={4} xl={6}>
                        <h1 className='mt-5'>Manage Contacts</h1>
                        <p className='mt-5 text-justify'>Bring your existing contacts from different sources like Gmail or LinkedIn. Centralize contacts to manage them better.</p>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={6}>
                        <img src="https://static.vecteezy.com/system/resources/previews/009/361/791/original/woman-with-headphones-and-microphone-with-computer-contact-us-customer-service-assistant-support-call-center-concept-cartoon-illustration-in-flat-style-vector.jpg" className='img-fluid' alt="" style={{height:'auto',width:'100%'}}  />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs={12} md={6} lg={4} xl={6} className='features-col' >
                        <img src="https://cdn.dribbble.com/users/24711/screenshots/3886002/falcon_persistent_connection_2x.gif" alt="" className='img-fluid' />
                    </Col>
                    <Col className='features-col' xs={12} md={6} lg={4} xl={6}  >
                        <h1 className='mt-5'>Data Management</h1>
                        <p className='mt-5'>Data management is a functional system for collecting and analyzing raw datasets. it is the most important process for the information technology sector </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features