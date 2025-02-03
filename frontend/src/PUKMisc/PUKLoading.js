import React, { useEffect, useState } from "react";
import '../PUKcss/PUKMisc.css';
import PUKPortraitHappy from '../PUKimages/PUKPortraitHappy.jpg';
import { useNavigate } from 'react-router-dom';

const PUKLoading = () => {
    const [dots, setDots] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => {
                if (prev.length < 3) {
                    return prev + '.';
                } else {
                    return '';
                }
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const handleRestartClick = () => {
        navigate('/home');
    }

    return (
        <div className="puk-misc-container">
            <div className="puk-chat">
                <img src={PUKPortraitHappy} alt="PUKPortraitHappy" className="puk-avatar" />
                <div className="puk-message">
                    <div>Loading, <br />you may need to wait up to 50 seconds {`in first load.${dots}`}</div>
                </div>
            </div>
            <div className="puk-loading-loader">
                <div className="puk-loading-progress-bar"></div>
            </div>
            <div className="puk-restart">
                <div>
                    Still no response?<br /><div className="puk-restart-button" onClick={handleRestartClick}>Click here to restart the IonianFarsi</div>{`if always loading.${dots}`}
                </div>
            </div>
        </div>
    )
}

export default PUKLoading;