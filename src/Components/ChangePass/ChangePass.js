import React from 'react'
import './ChangePass.css'

function ChangePass() {
    return (
        <div>
            <div className="otp">
                <div className="otp-form container">
                    <h1 className="title-pass">Change Password</h1>
                    <input className="input" type="text" placeholder="Current Password*"></input>
                    <input className="input" type="text" placeholder="New Password*"></input>

                    <button className="otp-but">Change Password</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePass
