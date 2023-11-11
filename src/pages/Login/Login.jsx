import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';


//화면 Main(메인화면) 컴포넌트를 만든다
const Login = () => {
    const [inputText_1, setInputText_1] = useState(''); // 초기값 설정(이름)
    const [inputText_2, setInputText_2] = useState(''); // 초기값 설정(날짜. 월)
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleInputChange_1 = (e) => {
        setInputText_1(e.target.value);
    };

    const handleInputChange_2 = (e) => {
        setInputText_2(e.target.value);
    };

    const handleCompleteButtonClick = () => {
        alert('성공적으로 로그인되었습니다!');
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/main');
    };

    const handleCompleteButtonClick_signup = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/signup');
    };


    return (
        <div className="iphone-frame">
            <Header />
            <br/>
            <div className="content login-column">

                <div>
                    <p>아이디를 입력해주세요.</p>
                    <input
                        className="login-input"
                        type="text"
                        value={inputText_1}
                        onChange={handleInputChange_1}
                    />
                    <br/>
                    
                    <p>비밀번호를 입력해주세요.</p>
                    <input
                        className="login-input"
                        type="text"
                        value={inputText_2}
                        onChange={handleInputChange_2}
                    />
                    <br/><br/>
                    <p>처음 이용하시는 건가요?</p>
                    <button className="go-to-signup-button" onClick={handleCompleteButtonClick_signup}>
                        회원가입 하러 가기
                    </button>
                    <div className="sizedbox"></div>
                    <button className="login-button" onClick={handleCompleteButtonClick}>
                        로그인 하기
                    </button>
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default Login;
