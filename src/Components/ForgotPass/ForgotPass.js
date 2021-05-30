import React from 'react'
import './ForgotPass.css'

function ForgotPass() {
    return (
        <div>
            <div className="forgot">
                <div className="form container">
                    <h1 className="title-pass">Recover password</h1>
                    <input className="input" type="text" placeholder="Email Address*"></input>

                    <button className="sign-but">Send reset link</button>
                    <button className="for-log">Log in</button>
                    <button className="for-new">Create new account</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass
