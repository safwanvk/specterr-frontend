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
                            <i className="fas fa-plus"></i>
                            <h1 className="-upl-h1">New Video</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Equalizing
