import React from 'react'
import './SignIn.css'

function SignIn() {
    return (
        <div>
            <div className="signIn">
                <div className="form container">
                    <h1 className="title">Log in</h1>
                    <input className="input" type="text" placeholder="Email Address*"></input>
                    <input className="input sec" type="text" placeholder="Password*"></input>

                    <button className="sign-but">LOG IN</button>
                    <button className="log-sign">Don't have an account? Sign up</button>
                    <button className="log-for">Forgot password?</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn
