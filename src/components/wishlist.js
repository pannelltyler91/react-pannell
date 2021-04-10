import {Component} from 'react';

class Wishlist extends Component{



    constructor(props){
        super(props);
        this.state = {
            wishList:[],
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidUpdate(prevProps){
        alert('Thank you! Your wish of ' + this.state.treeType + ' has been recieved! You will be contacted if your wish has been succesfully added to inventory.')
    }
    handleClick(e){
        e.preventDefault();
        var cName = e.target.parentElement[0].value
        var contact = e.target.parentElement[1].value
        var tree = e.target.parentElement[2].value
        this.setState ({
            ...this.state,
            clientName:cName,
            contactMethod:contact,
            treeType:tree
        })
        
            
    }
    render(){

        return(
            <div className='wishform'>
                <h2>Wishlist</h2>
                <form>
                    <label htmlFor='clientName'><u>Name:</u></label>
                    <br></br>
                    <input type='text' name='clientName' placeholder='Your Name Here'></input>
                    <br></br>
                    <label htmlFor='contact'><u>Contact info:</u></label>
                    <br></br>
                    <input type='text' name='contact' placeholder='Preferred method of contact'></input>
                    <br></br>
                    <label htmlFor='contact'><u>Tree Type:</u></label>
                    <br></br>
                    <input type='text' name='tree' placeholder='Tree type'></input>
                    <br></br>
                    <button type='submit' onClick={this.handleClick} >Add Wish</button>
                </form>
            </div>
        )
    }
}

export default Wishlist;