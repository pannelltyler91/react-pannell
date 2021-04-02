import {Component} from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import Home from '../components/home';
import Cart from '../components/cart';
import Aboutus from '../components/aboutus';
import Contact from '../components/contact';

class Nav extends Component{
    render(){
        const linkstyle = {
            margin:'3em'
        };
        return(
            <nav className='wrapper'>
                <div className='container'>
                    <hr/>
                    <NavLink to='/home' style={linkstyle} >Shop</NavLink>
                    <NavLink to='/contact' style={linkstyle} >Contact</NavLink>
                    <NavLink to='/aboutus' style={linkstyle}>About Us</NavLink>
                    <NavLink to='/cart' style={linkstyle}>Cart</NavLink>
                    <hr/>
                    <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/cart' component={Cart}></Route>
                    <Route path='/aboutus' component={Aboutus}></Route>
                    <Route path='/contact' component={Contact}></Route>
                    </Switch>

                    
                        
                    
                </div>
            </nav>
        )
    }
}

export default Nav;