import {Component} from 'react';

class Aboutus extends Component{
    constructor(props){
        super(props);
        this.state = {
        iframe:"https://www.youtube.com/embed/jBhKKI3h52Y"
        }
    }
    render(){
        const {iframe} = this.state;
        return(
            <div>
                <div className='header'>
                <h1>About Us</h1>
                <br></br>
                </div>
                <p>We are a small company based out of  Tyler's imagination. We have extensive knowledge of bonsai practices going all the way back to 1984!</p>
                
                <h3>Getting Started in Bonsai? Please watch tutorial below on how to get started!(Bike repair not included)</h3>
                <iframe width="560" height="315" src={iframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default Aboutus;