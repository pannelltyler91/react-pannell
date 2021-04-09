import {Component} from 'react';
import './css/contact.css';


class Contact extends Component{
    render(){
        return(
            <div className='footer'>
                <h4>Contact Us</h4>
                <p>Please contact us by phone, mail, or email.</p>
                <div>
                    
                <p><b>Email:</b><a href='mailto:tylerstinytrees@gmail.com subject=subject text' > tylerstinytrees@gmail.com</a>  |  <b>Phone:</b> 1-(800)-LIL-TREE  |  <b>Address:</b> 1984 Miyagi Place, Reseda, CA 91335</p>
                    
                </div>
            </div>
        )
    }
}

export default Contact;