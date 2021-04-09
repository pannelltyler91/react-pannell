import {Component} from 'react';
import Wishlist from '../components/wishlist';

class Aboutus extends Component{
    constructor(props){
        super(props);
        this.state = {
        iframe:"https://www.youtube.com/embed/jBhKKI3h52Y",
        wishList:[]
        }
    }
    render(){
        const {iframe} = this.state;
        return(
            <div className='aboutUs'>
                <div className='header'>
                    <br></br>
                    <hr/>
                    <h4>Tyler's Tiny Trees is a small company based out of  Tyler's imagination. We have extensive knowledge of bonsai practices going all the way back to 1984! We enjoy what we do and want to bring as many people as we can into the world of bonsai!</h4>
                    <hr/>
                </div>
                <div className='tutorial'>
                    <h5>Getting Started in Bonsai? Please watch tutorial below on how to get started!(Bike repair not included)</h5>
                    <iframe width="560" height="315" src={iframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='wishlist'>
                    <h5>Can't find a tree you like? Add on to our wishlist and we will do our best to update out stock!</h5>
                    <Wishlist/>
                </div>
            </div>
            
        )
    }
}

export default Aboutus;