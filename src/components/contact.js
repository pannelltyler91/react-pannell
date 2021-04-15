import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import './css/contact.css';


class Contact extends Component{
    render(){
        return(
            <div className='footer'>
                <Navbar variant="dark" expand="lg" className='navbar'>
                    <Navbar.Brand href="/">Contact Us</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/aboutus' >| Email: tylerstinytrees@gmail.com |</Nav.Link>
                        <Nav.Link href='/aboutus' >Phone: 1 (800)-LIL-TREE |</Nav.Link>
                        <Nav.Link href='/aboutus'> Address: 1984 Miyagi Place, Reseda, CA 91335 |</Nav.Link>
                        <Nav.Link href='/aboutus'><FaFacebook/></Nav.Link>
                        <Nav.Link href='/aboutus'><FaTwitter/></Nav.Link>
                        <Nav.Link href='/aboutus'><FaLinkedin/></Nav.Link>
                        <Nav.Link href='/aboutus'><FaInstagram/></Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Contact;