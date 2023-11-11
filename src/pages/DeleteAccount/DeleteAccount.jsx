import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './DeleteAccount.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const Logout = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleCompleteButtonClick = () => {
        alert('성공적으로 회원 탈퇴 되었습니다!');
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/chooseposition');
    };

    return (
        <div className="iphone-frame">
            <Header />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="content delete-column">
                <div className="for-chimae-font">
                    <h2 style={{fontSize:'15px'}}>회원 탈퇴를 하면 가족 일기장을 사용할 수 없어요.</h2>
                    
                </div>
                <br/><br/>
                <button className="delete-button" onClick={handleCompleteButtonClick}>
                    회원 탈퇴 하기
                </button>
                <h2 style={{fontSize:'10px'}}>가족 일기장을 사용하시려면 다시 회원 가입을 해주세요.</h2>
            </div>
            <Nav />
        </div>
    );
};

export default Logout;