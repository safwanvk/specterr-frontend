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
                    <div className="pro-sub">
                        <div className="icon">
                            <i className="fas fa-music music"></i>

                        </div>
                        <div className="process-text">
                            <div className="process-text-title">
                                <h1>1. Upload your audio</h1>
                            </div>
                            <div className="process-text-con">
                                <h1>Upload a high quality MP3 or WAV file. Our systems will analyze the file, then you can view a live video preview featuring your audio. </h1>
                            </div>
                        </div>
                        
                    </div>
                    <div className="pro-sub right">
                        <div className="icon">
                            <i className="fas fa-plus music"></i>
                        </div>
                        <div className="process-text">
                            <div className="process-text-title">
                                <h1>2. Equalizing</h1>
                            </div>
                            <div className="process-text-con">
                                <h1>Equalizing music with really nice visualization like good old days. </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pro-sub-second right">
                        <div className="icon">
                            <i className="fas fa-video music"></i>
                        </div>
                        <div className="process-text">
                            <div className="process-text-title">
                                <h1>3. Export your video</h1>
                            </div>
                            <div className="process-text-con">
                                <h1>Our servers will quickly render your video in HD and send it back to you. Download the file and you're done! </h1>
                            </div>
                        </div>
                        
                </div>
                <div className="but-div">
                    <button className="but-process">GET STARTED</button>
                </div>
            </div>
        </div>
    )
}

export default Equalizer
