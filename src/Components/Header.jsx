import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function App() {
    const [openNavRight, setOpenNavRight] = useState(false);

    return (
        <div className="container mt-3">
            <MDBNavbar expand='lg' style={{ boxShadow: 'none' }}>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <img
                            src='https://th.bing.com/th/id/OIP.34vaotYCI01NLHkVV2PV8QHaHa?rs=1&pid=ImgDetMain'
                            height='50'
                            alt=''
                            loading='lazy'
                        />
                        <h3 className=' main-heading pt-2' style={{ color: '#0db8f5' }}>Contact Flow</h3>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarRightAlignExample'
                        aria-controls='navbarRightAlignExample'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNavRight(!openNavRight)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar open={openNavRight}>
                        <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0 ms-5 me-2'>
                            <MDBNavbarItem>
                            <Link  to={'/'}style={{textDecoration:'none'}}>
                                <MDBNavbarLink active aria-current='page' href='#' className='mx-2'>
                                    Home
                                </MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>
                            <Link  to={'/contacts'}style={{textDecoration:'none'}}>
                            <MDBNavbarItem>
                                    <MDBNavbarLink className='mx-2' >Contacts</MDBNavbarLink>
                            </MDBNavbarItem>
                            </Link>
                        </MDBNavbarNav>
                        <button className='rounded-button'>Start Free Trail</button>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}