import React, {Component} from 'react'
import axios from "axios"
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class SignUp extends Component {
    constructor () {
        super ()
        this.state = {
            firstname: '',
            lastname: '',
            emailaddress: '',
            password: '',
            phone: '',
            state: '',
            course_id: 0,
            courseAnswers: [],
            shouldRedirect: false,
            message: ''
        }
    }
    componentDidMount() {
        axios.get('/auth/courses').then(response => this.setState({courseAnswers: response.data}))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        axios.post('/auth/signup', {...this.state}).then(response => {
            this.setState({ shouldRedirect: true})
        })
    }
    render () {
        if (this.state.shouldRedirect) {
            return <Redirect to = '/login' />
        }
        return (
            <div>
                <header>
                    <h1>New Student Registration</h1>
                </header>
                <div className="inputs">
                    <input onChange={this.handleChange} name ='first_name' placeholder='First Name' />
                    <input onChange={this.handleChange} name ='last_name' placeholder='Last Name' />
                    <input onChange={this.handleChange} name='email' placeholder='Email' />
                    <input onChange={this.handleChange} name='password' placeholder='Password' />
                    <input onChange={this.handleChange} name='phone' placeholder='Phone Number' />
                    <input onChange={this.handleChange} name='state' placeholder='State of Residence' />
                    <select onChange={this.handleChange} name='goal_id'>{this.state.goalAnswers.map(answer => (
                        <option value={+answer.course_id}>{answer.course}</option>))}
                    <option value="" disabled selected hidden>Select your course</option>
                    </select>
                    {/* <input onChange ={this.handleChange} name = 'message' placeholder='message'/> */}
                    <Link to='/signupconfirmation'><button className='sub-btn' onClick={this.handleClick}>Submit</button></Link>
                    <Link to='/home'><button className='return-button'>Cancel and Return to Home</button></Link>
                </div>
                
            </div>
        )
    }
}
export default connect(null, {})(SignUp)