import {Component} from 'react';

class Wishlist extends Component{
    componentDidUpdate(prevProps){
        alert('wish has been added!')
    }
    render(){
       
        return(
            <div>
                <h2>Wishlist</h2>
                <textarea type='textarea' name='wish' placeholder='Please enter name, contact, info, and kind of tree you wish to see in stock.'></textarea>
                <br></br>
                <button type='submit' >Add Wish</button>
            </div>
        )
    }
}

export default Wishlist;