import {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {removeItem} from '../reducers/actions/cartactions.js';
import {addQuantity} from '../reducers/actions/cartactions.js';
import {subtractQuantity} from '../reducers/actions/cartactions.js';
import './css/cart.css';

class Cart extends Component{

    handleRemove = (id) => {
        this.props.removeItem(id);
        console.log('clicked');
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    componentDidUpdate(prevProps){
        alert('Are you sure you want to remove/edit this item?');
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
                <h3 className='total'>Total:${this.props.total}</h3>
                <Link to='/checkout'><Button className='checkoutButton'>Checkout</Button></Link>
            </Container>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        items:state.addedItems,
        total:state.total
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        removeItem: (id) => {dispatch(removeItem(id))},
        addQuantity: (id) => {dispatch(addQuantity(id))},
        subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)