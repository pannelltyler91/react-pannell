import {Component} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {ADD_TO_CART} from '../reducers/actions/cartactions.js';

class Home extends Component{
    handleClick = (id) =>{
        this.props.addToCart(id);
        console.log('clicked');
    }
    render(){
        let itemList = this.props.items.map(item => {
            return(
                <div>
                    <Col m={3}> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='merchPic' variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                            {item.description}
                            <br></br>
                            {item.price}
                            </Card.Text>
                            <Button variant="primary" to="/" onClick={()=> {this.handleClick(item.id)}}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                </div>
            )
        })
        return(
            <div className='container'>
                <h1>Home</h1>
                <div className='box'>
                    <Container>
                    <Row>
                    {itemList}
                    </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        items:state.items
    }
}
const mapDispatchToProps = (dispatch) => {
 return{
     addToCart: (id) => {dispatch(ADD_TO_CART(id))}
    }
 
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);