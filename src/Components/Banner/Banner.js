import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div>
            <div className="Banner">
                <div className="content">
                    <h1 className="title">Turn your music into a killer video</h1>
                    <h1 className="description">Specterr makes it fast and easy to create custom music equalizers. Start growing your audience with video.</h1>
                    <button className="button">CREATE A VIDEO</button>
                </div>
                <video className="video" autoPlay loop>
                    <source src="https://specterr.b-cdn.net/specterr-landing.mp4" type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}

export default Banner
