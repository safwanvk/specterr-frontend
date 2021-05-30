import React from 'react'
import './ForgotPass.css'

function ForgotPass() {
    return (
        <div>
            <div className="forgot">
                <div className="form container">
                    <h1 className="title-pass">Forgot Password</h1>
                    <input className="input" type="text" placeholder="Email Address*"></input>

                    <button className="sign-but">Get Reset Email</button>
                    {/* <small class="text-center p-3 mt-0">We will send a one time password to your registered phone number</small> */}
                    <button className="for-log">Log in</button>
                    <button className="for-new">Create new account</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass
