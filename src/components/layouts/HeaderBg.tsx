import React, { Component } from 'react'
import './HeaderBg.scss'; 
interface Props {
    
}
interface State {
    
}

class HeaderBg extends Component<Props, State> {
    state = {}

    render() {
        return (
            <header className="header">
                <img className="header__bg" src='./assets/bg-header.png' alt="" />
                <img className="header__logo"  src='./assets/logo.png' />
            </header>
        )
    }
}

export default HeaderBg
