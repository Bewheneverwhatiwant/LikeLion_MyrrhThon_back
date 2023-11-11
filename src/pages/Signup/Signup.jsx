import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useState } from 'react';
import './Signup.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const Signup = () => {
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
        alert('성공적으로 회원가입되었습니다!');
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/login');
    };

    const handleCompleteButtonClick_check_ok = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        alert('사용 가능한 아이디입니다!');
    };


    return (
        <div className="iphone-frame">
            <Header /><br/>
            <div className="content signup-column">

                <div>
                    <p>사용하실 아이디를 입력해주세요.</p>
                    <input
                        className="signup-input"
                        type="text"
                        value={inputText_1}
                        onChange={handleInputChange_1}
                    />
                    <div className="sizedbox"></div>
                    <p>사용하실 비밀번호를 입력해주세요.</p>
                    <input
                        className="signup-input"
                        type="text"
                        value={inputText_2}
                        onChange={handleInputChange_2}
                    />
                    <p>다른 사람과 아이디가 똑같은지 검사해야 해요.</p>
                    <button className="check-button" onClick={handleCompleteButtonClick_check_ok}>
                        아이디 중복 검사 하기
                    </button>
                    <div className="sizedbox"></div>
                    <button className="signup-button" onClick={handleCompleteButtonClick}>
                        회원가입 하기
                    </button>
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default Signup;