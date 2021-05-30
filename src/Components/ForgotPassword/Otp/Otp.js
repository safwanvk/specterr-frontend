import React from 'react'
import './Otp.css'

function Otp() {
    return (
        <div>
            <div className="otp">
                <div className="otp-form container">
                    <h1 className="title-pass">Identify Your Identity</h1>
                    <input className="input" type="text" placeholder="Otp*"></input>

                    <button className="otp-but">Verify</button>
                </div>
            </div>
        </div>
    )
}

export default Otp
