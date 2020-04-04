import React, {Component} from 'react'
import {connect} from 'react-redux'
import {removeFromCart, Checkout} from '../../redux/reducer'

class Checkout extends Component {
    constructor () {
        super()
        this.backToCourses = this.backToCourses.bind(this)
    }
    backToCourses() {
        const {history} = this.props
        history.push('/courses')
    }

    render () {
        const {removeFromCart, checkout, cart, total, history} = this.props
        const cartProd = cart.map (prod => (
            <Prod key = {prod.id} id={prod.id} remove={removeFromCart} title={prod.title} />
        ))
    }
        return (
            

            
    )
}

export default connect (state => state, {removeFromCart, checkout}) (Checkout)