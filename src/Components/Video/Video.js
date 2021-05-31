import React from 'react'
import './Video.css'

function Video() {
    return (
        <div>
            <div className="video">
                <div className="but-div">
                    <button className="but-new">CREATE NEW VIDEO</button>
                </div>
                <div className="videos">
                    <div className="single-video">
                        <video className="video-pre" autoPlay loop>
                            <source src="https://specterr.b-cdn.net/specterr-lyrics-landing.mp4" type="video/mp4"></source>
                        </video>
                        <div className="down-but">Download</div>
                    </div>
                    <div className="single-video">
                        <video className="video-pre" autoPlay loop>
                            <source src="https://specterr.b-cdn.net/specterr-lyrics-landing.mp4" type="video/mp4"></source>
                        </video>
                        <div className="down-but">Download</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
