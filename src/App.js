import  {Component} from 'react';
// import { Cart } from './reducers/cart/cartReducer';
import Navagation from './components/links';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';



class App extends Component {

  render(){

    return (
      <Container>
        
      <div className="App">
        <div className='header'>
        <h1>Tyler's Tiny Trees</h1>
        <p>Whether you are pursing a new hobby or looking for ornate decorations, our bonsai trees are perfect for you!</p>
        </div>
      
        <BrowserRouter>
        <Navagation/>
        </BrowserRouter>
      </div>
      </Container>

     
      
     
       
        
      
    );
  }
}

export default App;
