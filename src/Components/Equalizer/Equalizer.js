import React from 'react'
import './Equalizer.css'

function Equalizer() {
    return (
        <div>
            <div className="Banner-equ">
                <video className="video-equ" autoPlay loop>
                    <source src="https://specterr.b-cdn.net/specterr-landing.mp4" type="video/mp4"></source>
                </video>
                <div className="content-equ">
                    <h1 className="title-equ">Music Equalizer</h1>
                    <h1 className="description-equ">Specterr makes it fast and easy to create custom music equalizers. Start growing your audience with video.</h1>
                    <button className="button-equ">CREATE A VIDEO</button>
                </div>
            </div>
            <div className="equalizer">
                <div className="equalizer-title">
                    <h1 className="equ-tit">How to make a music visualizer</h1>
                    <h1 className="sub-title">Create your first video in less than 5 minutes. It's super easy!</h1>
                </div>
                <div className="process">
                    <div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Equalizer
