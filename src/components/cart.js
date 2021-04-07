import {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {removeItem} from '../reducers/actions/cartactions.js';
import {addQuantity} from '../reducers/actions/cartactions.js';
import {subtractQuantity} from '../reducers/actions/cartactions.js';

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
    render(){
        let addedItems = 
        this.props.items.map(item =>{
            return(
          
                    <Col s={3}>
                    <div className='lineItem'>
                        <img src={item.image} alt={item.image}></img>
                        <div className='lineBody'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <h3>Price:${item.price}</h3>
                            <h3>Quantity:{item.quantity}</h3>
                            <br></br>
                        </div>
                        <div className='itemQuantityModify'>
                            <Link to='/cart'><Button className='plusOne' onClick={()=>{this.handleAddQuantity(item.id)}}>+</Button></Link>
                            <Link to='/cart'><Button className='minusOne' onClick={()=>(this.handleSubtractQuantity(item.id))}>-</Button></Link>

                        </div>
                        <Button className='removeItem' onClick = {() => {this.handleRemove(item.id)}}>Remove</Button>

                    </div>
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
                <h3>Total:${this.props.total}</h3>
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