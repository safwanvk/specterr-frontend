import React from 'react'
import './SideBar.css'

function SideBar() {
    return (
        <div>
            <div className="sidebar">
                <div className="side-icon">
                    <img className="side-logo" src="https://specterr.b-cdn.net/specterr-logo.svg" alt="logo" />
                </div>
                <hr></hr>
                <div className="side-btn">
                    <div className="side-btn-con">
                        <i className="fas fa-plus"></i>
                        <h1 className="h1">New Video</h1>
                    </div>
                </div>
                <div className="side-icon">
                    <div className="side-links">
                        <i className="fas fa-video video-icon"></i>
                        <h1 className="h1-video">My Videos</h1>
                    </div>
                </div>
                <div className="side-icon">
                    <div className="side-links">
                        <img className="acc-icon" src="https://img.icons8.com/ios/50/ffffff/guest-male.png" alt=""/>
                        <h1 className="h1-video">Account</h1>
                    </div>
                </div>
                <hr></hr>
                <div className="side-login">
                    <div className="side-btn-log">
                        <h1 className="h1">LOG IN</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
