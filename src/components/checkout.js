import {Component} from 'react';
import Cart from '../components/cart';
class Checkout extends Component{
    render(){
        return(
            <div>
                <h1>Checkout</h1>
                <hr/>
                <Cart/>
                <hr/>
                

            </div>
        )
    }
}

export default Checkout;