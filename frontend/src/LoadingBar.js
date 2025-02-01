import React from "react";
import './css/LoadingBar.css';
import FakePortrait from './images/FakePortrait.jpg';

function LoadingBar(){
    return (
        <div className="io-lb-container">
            <div className="io-lb-chat">
                <img src={FakePortrait} alt="FakePortrait" className="io-lb-avatar" />
                <div className="io-lb-message">
                <p>Loading, <br />you may need to wait up to 50 seconds in first load</p>
                </div>
            </div>
            <div className="io-lb-loader">
                <div className="io-lb-progress-bar"></div>
            </div>
        </div>
    )
}

export default LoadingBar;