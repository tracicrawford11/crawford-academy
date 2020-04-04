import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SignUpConfirmation extends Component {
  
render() {
    return ( 
      <div>
        <h1 className='getstarted-confirm'>Registration Confirmed!</h1>
        <p className='getstarted-thanks'>Congratulations on taking the first step towards becoming your best self! Please check the provided email address for confirmation. A representative will contact you within 24 business hours.</p>
        <section className='home-btn'>
          <Link to='/home'><button>Return to Home</button></Link>
        </section>
      </div>
    )
  }
}

export default SignUpConfirmation