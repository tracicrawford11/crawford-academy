require('dotenv').config()
const bcrypt = require ('bcryptjs')
const sgMail = require('@sendgrid/mail')
const users = require ('../models/users')

const signUp = (req, res) => {
    const db = req.app.get('db')
    const {firstname, lastname, emailaddress, phone, state, password} = req.body
    const {course_id} = req.body
    console.log(course_id)
    bcrypt.hash(password, 12).then( (hash) => {
        db.auth.signUp([firstname, lastname, emailaddress, phone, state, course_id, hash])
        .then(user => {
            console.log(user)
            const {user_id, emailaddress} = user[0]
            req.session.user = {
                id: user_id,
                emailaddress: emailaddress}
                    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                const msg = {
                    to: emailaddress,
                    from: 'tracicrawford11@yahoo.com',
                    cc: 'tracicrawford11@yahoo.com',
                    subject: 'Crawford Academy Registration',
                    text: 'Thank you for registering with Crawford Academy. We look forward to helping you become your best self.',
                    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                  };
                  //ES6
                  sgMail
                    .send(msg)
            res.status(200).json(req.session.user)
        }).catch(error => {
            console.log(error)
            res.status(500).json('Registration was unsuccessful. Please try again.')
        })
    }).catch(error => {
            console.log(error)
            res.status(500).json('Internal Server Error')
        })
}
const login = (req, res) => {
    const db = req.app.get('db')
    const {emailaddress, password} = req.body
    db.auth.getUser(emailaddress).then(user => {
        if(user.length === 0) {
            res.status(400).json('User does not exist')
        } else {
            bcrypt.compare(password, user[0].password).then(areEqual => {
                if(areEqual) {
                    const {user_id, emailaddress} = user[0]
                    req.session.user = {
                        id: user_id,
                        emailaddress: emailaddress,
                    }
                    res.status(200).json(req.session.user)
                } else {
                    res.status(403).json('Incorrect email or password')
                }
            })
        }
    })
}
    const logout = (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
    const getUser = (req, res) => {
        res.status(200).json(req.session.user)
    }
    module.exports = {
        signUp,
        login,
        logout,
        getUser
    }