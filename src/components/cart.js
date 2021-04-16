import {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {removeItem,addQuantity,subtractQuantity, coupon} from '../reducers/actions/cartactions.js';

import './css/cart.css';

class Cart extends Component{

    
    handleRemove = (id) => {
        this.props.removeItem(id);
        console.log('clicked');
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
        console.log(this.props.coupons);
       
    }

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    handleCoupon= (e)=>{
      e.preventDefault();
      console.log(e);
      let discountCode = e.target.parentElement[0].value;
      
      if( discountCode === 'my_first_bonsai'){
        
      }
        discountCode = '';
        
    }

    componentDidMount(){
      alert('First time client? Use code my_first_bonsai for a 10% discount!');
    }

    render(){
        let addedItems = 
        this.props.items.map(item =>{
            return(
                    <Col s={3} m={6}>
                    <Card className='card' style={{ width: '18rem' }}>
                    <div className='lineItem'>
                    <Card.Img className='merchPic' variant="top" src={item.image} />
                        <div className='lineBody'>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                            <br></br>
                            ${item.price}
                            <br></br>
                            {item.quantity}
                            </Card.Text>
                        </div>
                        <div className='itemQuantityModify'>
                            <Link to='/cart'><Button className='plusOne' onClick={()=>{this.handleAddQuantity(item.id)}}>+</Button></Link>
                            <Link to='/cart'><Button className='minusOne' onClick={()=>(this.handleSubtractQuantity(item.id))}>-</Button></Link>
                        </div>
                        <Button className='removeItem' onClick = {() => {this.handleRemove(item.id)}}>Remove</Button>
                    </div>
                    </Card>
                    </Col>
            )
        })
        return(
            <Container >
                <h1>Cart</h1>
                <ul>
                   <Row>
                    {addedItems}
                   </Row> 
                </ul>  
                <form>
                <input type='text' name='discount'></input>
                <button type='submit'name='discountButton' onClick={this.handleCoupon}>Apply Discount Code</button>
                </form>
                <h3 className='total'>Total:${this.props.total}</h3>
                <Link to='/checkout'><Button className='checkoutButton'>Checkout</Button></Link>
            </Container>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        items:state.addedItems,
        total:state.total,
        cartCount:state.addedItems.length,
        coupouns:state.coupons
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))},
        coupon: (id) => {dispatch(coupon(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)