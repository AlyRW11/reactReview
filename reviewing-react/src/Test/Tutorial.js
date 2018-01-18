import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Tutorial extends Comment {
    render (){

const formatName = (user) => {
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName: "Aly R.",
    lastName: "Wayne"
}

const element = (
    <h1> Hello, {formatName(user)}!</h1>
)

// ReactDom.render(
//     element,
//     document.getElementById('root')
// )

}}

export default Tutorial

