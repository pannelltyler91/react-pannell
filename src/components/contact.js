import {Component} from 'react';
import './css/contact.css';


class Contact extends Component{
    render(){
        return(
            <div className='footer'>
                <h4>Contact Us</h4>
                <p>Please contact us by phone, mail, or email.</p>
                <div>
                    <ul>
                        <li>Email: <a href='mailto:tylerstinytrees@gmail.com subject=subject text' >tylerstinytrees@gmail.com</a></li>
                        <li>Phone: 1-(800)-LIL-TREE</li>
                        <li>Address: 1984 Miyagi Place, Reseda, CA 91335</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contact;