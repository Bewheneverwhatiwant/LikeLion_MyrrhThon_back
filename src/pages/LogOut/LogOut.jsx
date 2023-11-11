import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './LogOut.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const Logout = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleCompleteButtonClick = () => {
        alert('성공적으로 로그아웃 되었습니다!');
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/chooseposition');
    };

    return (
        <div className="iphone-frame">
            <Header />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="content logout-column">
                <div className="for-chimae-font">
                    
                    <h2 style={{fontSize:'15px'}}>로그아웃을 하면 가족 일기장을 사용할 수 없어요.</h2>
                    <br/><br/>
                </div>
                <div className="sizedbox"></div>
                <button className="logout-button" onClick={handleCompleteButtonClick}>
                    로그아웃 하기
                </button>
                <p style={{fontSize:'10px'}}>가족 일기장을 사용하시려면 다시 로그인 해주세요.</p>
            </div>
            <Nav />
        </div>
    );
};

export default Logout;