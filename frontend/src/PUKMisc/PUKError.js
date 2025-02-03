import React from "react";
import '../PUKcss/PUKMisc.css';
import PUKPortraitUnhappy from '../PUKimages/PUKPortraitUnhappy.jpg';
import { useNavigate } from 'react-router-dom';

const PUKError = ({ message }) => {
    const navigate = useNavigate();

    const handleRestartClick = () => {
        navigate('/home');
    }

    return (
        <div className="puk-misc-container">
            <div className="puk-chat">
                <img src={PUKPortraitUnhappy} alt="PUKPortraitUnhappy" className="puk-avatar" />
                <div className="puk-message">
                    <h1>AN ERROR OCCURRED</h1>
                    <div>Oops! Looks like something went wrong.<br />The wise man tells you that the reason lies in</div>
                    <div className="puk-error-message">{message}</div>
                </div>
            </div>
            <div className="puk-restart">
                <div>
                    That's okay, you can always<br /><div  className="puk-restart-button" onClick={handleRestartClick}>Click here to restart the IonianFarsi!</div>
                </div>
            </div>
        </div>
    )
}

export default PUKError;