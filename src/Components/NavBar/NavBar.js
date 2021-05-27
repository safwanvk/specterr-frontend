import React from 'react'
import './NavBar.css'


function NavBar() {
    return (
        <div className="NavBar">
            <img className="logo" src="https://specterr.b-cdn.net/specterr-logo.svg" alt="logo" />
            <a className="anchor" href>Visualizers</a>
            <button className="button2">SIGN IN</button>
        </div>
    )
}

export default NavBar
