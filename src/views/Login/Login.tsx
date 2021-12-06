import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    
}
interface State {
    
}

export default class Login extends Component<Props, State> {
    state = {}

    render() {
        return (
            <div>
                <h1>Login</h1>
                <li>
                    <NavLink to='/'>Back Home </NavLink>
                </li>
            </div>
        )
    }
}
