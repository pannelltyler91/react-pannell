import {Component} from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../components/home';
import Cart from '../components/cart';
import Aboutus from '../components/aboutus';
import Contact from '../components/contact';
import Conifers from '../components/conifers_pines';
import BLE from '../components/broadleafevergreen';
import Deciduous from '../components/deciduous';
import Checkout from '../components/checkout';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaShoppingCart} from 'react-icons/fa';
import {FaTree} from 'react-icons/fa';
import './css/link.css';





class Navagation extends Component{
    render(){
       
        return(
            <div>

                <Navbar  sticky='top'variant="dark" expand="lg" className='navbar'>
                    <Navbar.Brand href="/"><FaTree/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="| Shop" className="basic-nav-dropdown">
                            <NavLink to='/' ><NavDropdown.Item href='/' >All</NavDropdown.Item></NavLink>
                            <NavLink to='/deciduous'  ><NavDropdown.Item href='/deciduous' >Deciduous</NavDropdown.Item></NavLink>
                            <NavLink to='/blevergreens' ><NavDropdown.Item href='/blevergreens' >Broadleaf Evergreens</NavDropdown.Item></NavLink>
                            <NavLink to='/conifers' ><NavDropdown.Item href='/conifers' >Conifers and Pines</NavDropdown.Item></NavLink>

                        </NavDropdown>
                        <NavLink to='/aboutus'><Nav.Link href='/aboutus' >| About Us |</Nav.Link></NavLink>
                        <NavLink className='cart' to='/cart' ><Nav.Link href='/cart'>| <FaShoppingCart/> |</Nav.Link></NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <h2>Tyler's Tiny Trees</h2>
                    
                                <Switch>
                                    <Route exact path='/' component={Home}></Route>
                                    <Route path='/cart' component={Cart}></Route>
                                    <Route path='/aboutus' component={Aboutus}></Route>
                                    <Route path='/contact' component={Contact}></Route>
                                    <Route path='/conifers' component={Conifers}></Route>
                                    <Route path='/blevergreens' component={BLE}></Route>
                                    <Route path='/deciduous' component={Deciduous}></Route>
                                    <Route path='/checkout' component={Checkout}></Route>
                                </Switch>

            </div>
                    
                        
                    
               
        )
    }
}

export default Navagation;