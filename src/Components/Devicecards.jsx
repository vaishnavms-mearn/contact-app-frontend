import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function Devicecards() {
    return (
        <div className='device-cards'>
            <Container  style={{  marginTop: '40px' }}>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={4}>
                        <Card className='cards' style={{ width: '17rem', borderRadius: '20px',padding:'10px' }}>
                            <Card.Img variant="top" src="https://images.vexels.com/media/users/3/158671/isolated/preview/c051cb3ce81ebb07373aaef516f8f421-notebook-laptop-illustration-by-vexels.png" height={'200px'} width={'200px'} />
                            <Card.Body>
                                <Card.Title>Web</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  sm={12}  md={6} lg={6} xl={4} >
                        <Card className='cards'  style={{ width: '17rem', borderRadius: '20px',padding:'10px' }}>
                            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.zvEtw6-jbbM1dKPdc-E5ewHaHa?rs=1&pid=ImgDetMain" height={'200px'} width={'200px'} />
                            <Card.Body>
                                <Card.Title>Mobile</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  sm={12}  md={6} lg={6} xl={4} >
                        <Card className='cards' style={{ width: '17rem', borderRadius: '20px',padding:'10px' }}>
                            <Card.Img variant="top" src="https://external-preview.redd.it/ZvGRX44CJK9T8jmaDsvqzW0hpAI13EpqHcGiI0a5pXk.jpg?auto=webp&s=07fc8ed2b35a119290828ed39e64c97e7f1db29d" height={'200px'} width={'200px'} />
                            <Card.Body>
                                <Card.Title>Chrome Extension</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Devicecards