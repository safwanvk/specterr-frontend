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
            </div>
        </div>
    )
}

export default SideBar
