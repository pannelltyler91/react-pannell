import  {Component} from 'react';
// import { Cart } from './reducers/cart/cartReducer';
import Nav from './components/links';
import {BrowserRouter} from 'react-router-dom';



class App extends Component {

  render(){

    return (
      <div className="App">
        <div className='header'>
        <h1>E-commerce</h1>
        <p>We are an e-commerce site with a purpose.</p>
        </div>
      
        <BrowserRouter>
        <Nav/>
        </BrowserRouter>

      </div>
     
      
     
       
        
      
    );
  }
}

export default App;
