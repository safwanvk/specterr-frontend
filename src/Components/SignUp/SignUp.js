import React from 'react'
import './SignUp.css'

function SignUp() {
    return (
        <div>
            <div className="signUp">
                <div className="form container">
                    <h1 className="title">Sign up</h1>
                    <input className="input" type="text" placeholder="Email Address*"></input>
                    <input className="input sec" type="text" placeholder="Password*"></input>
                    <div className="check-div">
                        <input className="check sec" type="checkbox"></input>
                        <h1 className="terms">I have read and agree to the <u className="u">Terms of Service.</u></h1>
                    </div>
                    <button className="sign-but">SIGN UP</button>
                    <button className="sign-log">Already have an account? Log in</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
