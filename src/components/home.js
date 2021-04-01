import {Component} from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Home extends Component{
    render(){
        let itemList = this.props.items.map(item => {
            return(
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                            {item.description}
                            <br></br>
                            {item.price}
                            </Card.Text>
                            <Button variant="primary" to="/">Add to Cart</Button>
                        </Card.Body>
                    </Card>

                </div>
            )
        })
        return(
            <div className='container'>
                <h1>Home</h1>
                <div className='box'>
                    {itemList}
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


export default connect(mapStateToProps)(Home);