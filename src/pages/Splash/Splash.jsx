import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './Splash.scss';
import remember_logo from '../../assets/logo_header_remember.svg';
import axios from 'axios';

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
            <div className="splash-text">
                <img src={remember_logo} alt="이미지"  style={{width:'240px', height:'60px'}} />
                <p>우리 가족을 기억해</p>
                <p>소중한 나를 기억해</p>
            </div>
        </div>
    );
}

export default Splash;
