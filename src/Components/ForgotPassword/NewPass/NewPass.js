import React from 'react'
import './ChangePass.css'

function ChangePass() {
    return (
        <div>
            <div className="otp">
                <div className="otp-form container">
                    <h1 className="title-pass">Set New Password</h1>
                    <input className="input" type="text" placeholder="New Password*"></input>
                    <input className="input" type="text" placeholder="Confirm Password*"></input>

                    <button className="otp-but">Set New Password</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePass
