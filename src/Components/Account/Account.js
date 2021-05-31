import React from 'react'
import './Account.css'

function Account() {
    return (
        <div>
            <div className="account">
                <div className="ac-div">
                    <div className="email">Email</div>
                    <hr></hr>
                    <div className="user">Username</div>
                </div>
                <div className="ac-pass-div">
                    <div className="user">Change Password</div>
                </div>
                <div className="ac-pass-div">
                    <div className="user">Delete Account</div>
                </div>
                <h3 className="h3">Contact us at <u className="u">help@specterr.com</u></h3>
            </div>
        </div>
    )
}

export default Account
