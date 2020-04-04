import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Cart from './components/Cart/Cart'
import SignUp from './components/SignUp/SignUp'
import SignUpConfirmation from './components/Confirmation/SignUpConfirmation'
import Courses from './components/Courses/Courses'
import OrderConfirmation from './components/Confirmation/OrderConfirmation'
import AboutUs from './components/AboutUs/AboutUs'
import ContactConfirmation from './components/Confirmation/ContactConfirmation'
import CheckoutForm from './components/Checkout/CheckoutForm'

export default (
    <Switch>
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={CheckoutForm} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signupconfirmation' component={SignUpConfirmation} />
        <Route path='/courses' component={Courses} />
        <Route path='/orderconfirmation' component={OrderConfirmation} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route path='/contactconfirmation' component={ContactConfirmation} />
        <Route exact path='/home' component ={Home} />
    </Switch>
)