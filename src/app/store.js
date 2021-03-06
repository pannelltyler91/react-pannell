
import cartReducer from '../reducers/cart/cartReducer';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from "../App";

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

export default store;

