import React from 'react'
import './Equalizing.css'

function Equalizing() {
    return (
        <div>
            <div className="equalizing">
                <div className="steps">
                    <button className="step-1">
                        1
                    </button>
                    <h1 className="h1-audio">Audio</h1>
                </div>
                <div className="steps">
                    <vl className="vl"></vl>
                    <h1 className="h1-audio1">Audio?</h1>
                    <div className="upl-btn">
                        <div className="upl-btn-con">
                            <i className="fas fa-music"></i>
                            <h3 className="upl-h1">Upload Audio</h3>
                        </div>
                    </div>
                </div>
                <div className="steps2">
                    <button className="step-2">
                        2
                    </button>
                    <h1 className="h1-audio">Equalizing</h1>
                </div>
                <div className="steps">
                    <vl className="vl"></vl>
                    <h1 className="h1-audio1">Processing</h1>
                </div>
                <div className="steps2">
                    <button className="step-2">
                        2
                    </button>
                    <h1 className="h1-audio">Export</h1>
                </div>
                <div className="steps">
                    <vl className="vl"></vl>
                    <h1 className="h1-audio1">Video?</h1>
                    <div className="upl-btn">
                        <div className="upl-btn-con">
                            <i className="fas fa-video"></i>
                            <h3 className="upl-h1">Export Video</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equalizing
