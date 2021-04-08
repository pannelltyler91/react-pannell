import  {Component} from 'react';
// import { Cart } from './reducers/cart/cartReducer';
import Navagation from './components/links';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Contact from './components/contact';
import Home from './components/home';
import '../src/app.css';




class App extends Component {

  render(){

    return (
     
      <Container>
        
        <div className="App">
          <div className='header'>
            <h1>Tyler's Tiny Trees</h1>
          </div>
        <BrowserRouter>
        <Navagation/>
        </BrowserRouter>
        </div>
        <Row className='row'></Row>
          <div className='footer'>
            <Contact/>
          </div>
      </Container>
     
     
      
     
       
        
      
    );
  }
}

export default App;
