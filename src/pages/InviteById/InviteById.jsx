import React from "react";
import { useState } from 'react';
import './InviteById.scss';
import { useNavigate } from 'react-router-dom';
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";


//화면 Main(메인화면) 컴포넌트를 만든다
const InviteById = () => {

    const [inputText, setInputText] = useState('');
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleCompleteButtonClick = () => {
        if (inputText === 'lny021102') {
            alert('일기장에 가족이 초대되었습니다!');
            navigate('/seemyfamily');
        } else {
            alert('아이디가 없어요! 가족에게 회원가입을 안내해주세요.');
        }
    };


    return (
        <div className="content invite-column iphone-frame">
            <Header />
            <div className="for-chimae-font">
                <h2>가족 일기장은 가족이 회원가입 및 로그인을 해야 이용하실 수 있습니다.</h2>
                <h2>가족의 회원가입 및 로그인 후, 초대하려는 가족의 ID를 입력하세요.</h2>
            </div>
            <div>
                <input
                    className="invite-by-id-input"
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <p>입력하신 가족의 ID: {inputText}</p>
            </div>
            <button className="invite-by-id-button" onClick={handleCompleteButtonClick}>
                가족 초대하기
            </button>
            <Nav />
        </div>
    );
};

export default InviteById;