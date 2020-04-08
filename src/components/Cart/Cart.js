import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCourse, addQuantity, subtractQuantity} from './../../redux/cartReducer'


class Cart extends Component {

  handleRemove = (id) => {this.props.removeCourse(id)
  }
  handleAddQuantity = (id) => {
    this.props.addQuantity(id)
  }
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id)
  }
  
  render() {
    let addedCourses = this.props.courses.length ? 
    (this.props.courses.map(course => {
      return (
        <div key={course.id}>
          <div className='description'>
            <span className='prod_name'>{course.title}</span>
            <p><b>Price: ${course.price}</b></p>
            <p><b>Quantity: {course.quantity}</b></p>
            <button className='remove' onClick={this.handleRemove}>Remove Item from Cart</button>
            <br/>
          </div>
        </div>
      )
    })
    ):(
      <></>
    )
    return (
      <div className='container'>
        <header className='cart'>
          <h1 className='ordered'>You have chosen:</h1>
          <Link to='/checkout'><button className='checkout'>Continue to Checkout</button></Link>
        </header>
        <ul className='collection'>
          {addedCourses}
          <br/>
        </ul>
        <section className='submit-btn'>
          <Link to='/home'><button className='return-button'>Cancel and Return to Home</button></Link>
        </section>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    courses: state.cartReducer.addedCourses
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeCourse: (id)=> {dispatch(removeCourse(id))},
    addQuantity: (id) => {dispatch(addQuantity(id))},
    // subtractQuantity: (id) => {dispatch(subtractQuantity(id))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
