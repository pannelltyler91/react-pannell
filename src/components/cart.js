import {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Cart extends Component{
    render(){
        let addedItems = 
        this.props.items.map(item =>{
            return(
                <Row>
                    
                    <div className='lineItem'>
                        <img src={item.img} alt={item.image}></img>
                        <div className='lineBody'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <h3>Price:${item.price}</h3>
                            <h3>Quantity:{item.quantity}</h3>
                        </div>
                        <div className='itemQuantityModify'>
                            <Link to='/cart'></Link>
                            <Link to='/cart'></Link>

                        </div>
                        <Button className='removeItem'>Remove</Button>

                    </div>
                    
                </Row>
                

            )
        })
        return(
            <Container >
                <h1>Cart</h1>
                <ul>
                    {addedItems}
                </ul>  
            </Container>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        items:state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)