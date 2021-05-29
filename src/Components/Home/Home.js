import React from 'react'
import './Home.css'

function Home() {
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
            <div class="vis-con">
                <div className="vis-div">
                    <img className="vis-img" src="https://mk0musicianwaveddwsx.kinstacdn.com/wp-content/uploads/2020/08/music-visualization.jpg" alt="" />
                </div>
                <div className="vis-text">
                    <h1 className="text-title">Easy to use Online Editor</h1>
                    <h1 className="text-cont"><b>No download needed.</b> Jump into the web based editor and start customizing right away. The live video preview updates in real time and moves with your music.</h1>
                    <h1 className="text-cont">It only takes a few minutes to make a video. Use simple step based controls or dive deeper with advanced customization options.</h1>
                    <button className="button-text">TRY IT</button>
                </div>
            </div>
            <div class="home">
                <div className="con">
                    <h1 className="text">Get Started For Free</h1>
                    <button className="but">CREATE A VIDEO</button>
                </div>
            </div>
        </div>
    )
}

export default Home
