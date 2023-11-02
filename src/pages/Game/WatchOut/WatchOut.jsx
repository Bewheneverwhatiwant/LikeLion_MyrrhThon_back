import React from "react";
import Nav from "../../../component/Nav/Nav";
import Header from "../../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './WatchOut.scss';

//화면 Main(메인화면) 컴포넌트를 만든다
const WatchOut = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleCompleteButtonClick = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/maingamepage');
    };

    return (
        <div>
            <Header />
            <div className="column">
                <div className="content">
                    <h1>치매 전단계에요. 조심하세요!</h1>
                </div>
                <div className="sizedbox"></div>
                <button className="watchout-button" onClick={handleCompleteButtonClick}>
                    돌아가기
                </button>
            </div>
            <Nav />
        </div>
    );
};

export default WatchOut;