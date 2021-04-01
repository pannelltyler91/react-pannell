import {Component} from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import Home from '../components/home';

class Nav extends Component{
    render(){
        return(
            <nav className='wrapper'>
                <div className='container'>
                    <NavLink to='/' className='logo'>This.Ecommerce</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/aboutus'>About Us</NavLink>
                    <NavLink to='/'>Shop</NavLink>
                    <NavLink to='/cart'>Cart</NavLink>
                    <hr/>
                    <Switch>
                    <Route path='/' component={Home}></Route>
                    </Switch>
                        
                    
                </div>
            </nav>
        )
    }
}

export default Nav;