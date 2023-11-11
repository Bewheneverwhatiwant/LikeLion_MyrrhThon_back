import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './Splash.scss';
import remember_logo from '../../assets/logo_header_remember.svg';
import splash_image from '../../assets/splash-image.svg';

function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        // 3초 후 메인 화면으로 전환
        const timeout = setTimeout(() => {
            navigate('/chooseposition'); // '/' 경로로 메인 화면으로 이동
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <div className="iphone-frame">
            <div>
                <img src={splash_image} alt="이미지" className="splash-text" />
            </div>
        </div>
    );
}

export default Splash;
