import  {Component} from 'react';
import { Cart } from './reducers/cart/cartReducer';
import Nav from './components/links';



class App extends Component {

  render(){

    return (
      <div className="App">
        <Nav/>
       
      </div>
    );
  }
}

export default App;
