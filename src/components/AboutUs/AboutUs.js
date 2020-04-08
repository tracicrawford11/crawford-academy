import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class AboutUs extends Component {
    constructor () {
        super ()
        this.state = {
           name: '',
           email: '',
           phone: '',
           message: '',
           preferredMethod: ['phone', 'email']
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        console.log('hit')
        e.preventDefault()
        const {name, email, phone, message} = this.state
        let body = {
            name,
            email,
            phone,
            message
        }
        this.props.history.push('/contactconfirmation')
    }
render() {
    return ( 
        <div>
            <nav className='nav-bar'>
                <h1 className='contact'>About Us!</h1>
                <Link to='/home'><button className='sub'>Return to Home</button></Link> 
            </nav>

            <div className='bureaus'>
                <p>
                    At Crawford Academy, we strive to help you live your best life! We offer courses to help you live your best life.
                    We offer courses to help you understand yourself, so you can truly know what life path and career path is best suited for you.
                </p>
                <br/>
                <br/>
                <p>
                    Crawford Academy is an online learning community that empowers each of our members to get inspired, make discoveries, 
                    and learn new skills. Our staff is available to answer questions or assist in any way during business hours. Please feel free to 
                    submit messages to us at anytime and we will respond as soon as possible. We want you to feel supported and important to us
                    throughout this journey.
                </p>
                <br/>
                <br/>
                <p>
                    For your convenience, all contact methods are listed below, including direct messaging.
                </p>
            </div>

            <section className='boxes'>
                <a className='address'>
                    <h1>Address</h1>
                    <br/>
                    <br/>
                    <p>3939 Evergreen Court</p>
                    <p>Allen, TX 75013</p>
                    <br/>
                    <br/>
                    <img className='envelope' src='https://www.pngitem.com/pimgs/m/174-1747161_envelope-icon-png-green-transparent-png.png' alt='envelope' />
                </a>

                <a className='phone'>
                    <h1>Phone</h1>
                    <br/>
                    <br/>
                    <p>(888) 897-0987</p>
                    <br/>
                    <br/>
                    <img className='phone-icon' src='https://previews.123rf.com/images/alexwhite/alexwhite1504/alexwhite150400996/38733888-phone-green-icon-telephone-sign.jpg' alt='phone' />
                </a>

                <a className='email'>
                    <h1>Email</h1>
                    <br/>
                    <br/>
                    <p>info@crawfordacademy.com</p>
                    <br/>
                    <br/>
                    <img className='email-icon' src='https://st.depositphotos.com/1005920/2066/i/950/depositphotos_20667081-stock-photo-mail-green-circle-glossy-web.jpg' alt='email' />
                </a>

                <a className='hours'>
                    <h1>Business Hours</h1>
                    <br/>
                    <br/>
                    <p>Mon - Sat</p>
                    <p>8:00am - 8:00pm</p>
                    <br/>
                    <br/>
                    <img className='hours-icon' src='data:image/png;base64,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' alt='clock'/>
                </a>
            </section>
            
            <div className='inputs'>
                <input onChange={this.handleChange} name ='name' placeholder='Name' />
                <input onChange={this.handleChange} name='email' placeholder='Email' />
                <input onChange={this.handleChange} name='phone' placeholder='Phone Number' />
                <input onChange={this.handleChange} name='message' placeholder='Message' />
                <select onChange={this.handleChange} name='method'>{this.state.preferredMethod.map(answer => (
                    <option>{answer}</option>))}
                <option value="" disabled selected hidden>Preferred Contact Method</option>
                </select>
                <button className='sub' onClick={this.handleClick}>Submit</button>
            </div> 
        
        </div>
    )
  }
}

export default AboutUs