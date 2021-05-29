import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="navigation">
                    <h3>Navigation</h3>
                    <div className="links">
                        <h5 className="element" href>Home</h5>
                        <h5 className="element1" href>Music Equalizer</h5>
                    </div>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <div className="links">
                    <h5 className="element" href>Contact: info@specterr.com</h5>
                    <h5 className="element1">© 2021 Tunebat LLC</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
