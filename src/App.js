import  {Component} from 'react';
// import { Cart } from './reducers/cart/cartReducer';
import Navagation from './components/links';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Contact from './components/contact';
import '../src/app.css';




class App extends Component {

  render(){

    return (
     
      <Container fluid>
        
        <div className="App">
          
            
       
        
        <BrowserRouter className='fixed-top'>
        <Navagation/>
        <Contact/>
        </BrowserRouter>
        </div>
      </Container>
     
     
      
     
       
        
      
    );
  }
}

export default App;
