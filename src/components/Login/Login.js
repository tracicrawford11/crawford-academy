import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../redux/reducer'

class Login extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            emailaddress: '',
            password: ''
        }
    }
    async componentDidMount() {
        let res = await axios.get('/auth/user-data')
        if (res.data.id) this.props.history.push('/profile')
    }
    login = async() => {
        //if (e) e.preventDefault()
        const {emailaddress, password} = this.state
        try {
            const res = await axios.post('/auth/login', {emailaddress, password})
            if (res.data.id) this.props.history.push('/profile')
        }catch (e) {
            alert ('Login failed. Please try again')
        }
    }
    render () {
        return (
            <div>
                <header>
                    <h1>Please enter your email and password to see your profile.</h1>
                </header>
                <section className='login'>
                    <input placeholder="Email" onChange={(e) => this.setState({ emailaddress: e.target.value})} />
                    <input placeholder="Password" onChange={(e) => this.setState({ password: e.target.value})} />
                    <button className='log' type='submit' onClick={this.login}>Log In</button>
                </section>
                <section className='return'>
                <Link to='/home'><button className='return-button'>Cancel and Return to Home</button></Link>
                </section>
            </div>
        )
    }
}
export default Login