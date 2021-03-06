import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ContactConfirmation extends Component {
  
render() {
    return ( 
        <div>
            <h1 className='contact-confirm'>Confirmation of Contact</h1>
            <br/>
            <br/>
            <h1 className='contact-thanks'>Thank you for contacting Crawford Academy. A representative will contact you via your preferred method within 24 business hours.</h1>
            <br/>
        <section className='homeContact-btn'>
          <Link to='/home'><button>Return to Home</button></Link>
        </section>

        </div>

    )
  }
}

export default ContactConfirmation