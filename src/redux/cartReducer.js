import axios from 'axios'

const initialState = {
    courses: [],
    cart: [],
    addedCourses: [],
    total: 0
}

const GET_COURSES = 'GET_COURSES'

export const getCourses = () => {
    console.log('hit')
    return {
        type: GET_COURSES,
        payload: axios.get('/api/prod')
    }
}

const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = (course)=> {
    return {
        type: ADD_TO_CART,
        payload: course
    }
}
const REMOVE_COURSE = "REMOVE_COURSE"

export const removeCourse = (course) => {
    return {
        type: REMOVE_COURSE,
        payload: course
    }
}
const ADD_QUANTITY = 'ADD_QUANTITY'

export const addQuantity = (course) => {
    return {
        type: ADD_QUANTITY,
        payload: course
    }
}
const SUB_QUANTITY = 'SUB_QUANTITY'

export const subQuantity = (course) => {
    return {
        type: SUB_QUANTITY,
        payload: course
    }
}

export default function cartReducer (state=initialState, action) {
    if (action.type === `${GET_COURSES}_FULFILLED`) {
        return { ...state, courses: action.payload.data}
    }
    if (action.type === ADD_TO_CART) {
        console.log(action.payload.course_id)
        console.log(state.courses)
        let addedCourse = state.courses.find(course => course.prod_id === action.payload.prod_id)
        let existed_course = state.addedCourses.find (course => action.payload.course_id === course.course_id)
        console.log(addedCourse)
        if (existed_course) {
            addedCourse.quantity++
                return {...state, cart: state.cart + addedCourse}
            } else {
                addedCourse.quantity = 1
                let newTotal = state.total + addedCourse
                return {...state,
                addedCourses: [...state.addedCourses, addedCourse],
                total: newTotal
            }
        }
    }  
    if(action.type === REMOVE_COURSE){
        let courseToRemove= state.addedCourses.find(course=> action.id === course.id)
        let new_courses = state.addedCourses.filter(course=> action.id !== course.id)
        console.log(courseToRemove)    
            //calculating the total
        let newTotal = state.total - (courseToRemove.price * courseToRemove.quantity )
        console.log(courseToRemove)
        return{
            ...state,
            addedCourses: new_courses,
            total: newTotal
        }
    }
    if(action.type=== ADD_QUANTITY){
        let addedCourse = state.courses.find(course=> course.id === action.id)
        addedCourse.quantity += 1 
        let newTotal = state.total + addedCourse.price
            return{
              ...state,
              total: newTotal
          }
        }
    if(action.type=== SUB_QUANTITY){  
        let addedCourse = state.courses.find(course=> course.id === action.id) 
            //if the qt == 0 then it should be removed
        if(addedCourse.quantity === 1){
            let new_courses = state.addedCourses.filter(course=>course.id !== action.id)
            let newTotal = state.total - addedCourse.price
            return{
                ...state,
                addedCourses: new_courses,
                total: newTotal
            }
        } else {
            addedCourse.quantity -= 1
                let newTotal = state.total - addedCourse.price
                return{
                    ...state,
                    total: newTotal
                }
            }
    } else {
        return state
    }
}