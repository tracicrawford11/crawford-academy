import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {addToCart, getCourses} from './../../redux/cartReducer'
import {connect} from 'react-redux'

class Courses extends Component {
  constructor () { 
    super()
  this.state = {
    courses: []
  }
}
  componentDidMount() {
    // axios.get('/api/prod').then(response => {
    //   console.log(response.data)
    // this.setState({courses: response.data})})
    this.props.getCourses()
    
  }
render() {
  console.log(this.props.courses)
  const mappedCourses = this.props.courses.map((val, index) => {
    console.log(val)
    return (
      <div className='course-list' key={index.id}>
        
        <h1>{val.title}</h1>
        <br/>
        <button className='add-cart' onClick={() => this.props.addToCart(val)}>Add to Cart</button>
        <br/>
        <h2>{val.description}</h2>
        <br/>
        <h2>Price: ${val.price}</h2>
        <br/>
      </div>
    )
  })
    return (
      <div>

        <nav className='services'>
          <h1 className='services-h1'>COURSES</h1>
            <section className='services-links'>
              <Link to='/cart'><button>Continue to Cart</button></Link>
              <Link to='/home'><button>Return to Home</button></Link>
            </section>
        </nav>

        <br />
        <section className='mapped-courses'>
          {mappedCourses}
        </section>
        
      
      </div>
        
    )
  }
}
const mapStateToProps = (state) => {
  return {
    val: state.val,
    courses: state.cartReducer.courses
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {dispatch(addToCart(id))},
    getCourses: () => {dispatch(getCourses())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses)
