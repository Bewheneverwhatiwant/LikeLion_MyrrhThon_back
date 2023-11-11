import React from "react";
import { useState } from 'react';
import './InviteById.scss';
import { useNavigate } from 'react-router-dom';
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";


//화면 Main(메인화면) 컴포넌트를 만든다
const InviteById = () => {

    const [inputText, setInputText] = useState('');
    const [inputText_nickname, setInputText_nickname] = useState('');
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
    const handleInputChange_nickname = (e) => {
        setInputText_nickname(e.target.value);
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
                <h2 style={{ textAlign: 'center' }}>가족 일기장은 가족이 로그인을 <br /> 해야 이용하실 수 있습니다.</h2>
                <h2 style={{ textAlign: 'center' }}>초대하려는 가족의 ID를 입력하세요.</h2>
            </div>
            <div>
                <input style={{ textAlign: 'center', width: '300px', height: '45px' }}
                    className="invite-by-id-input"
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <p style={{ textAlign: 'center' }}>입력하신 가족의 ID: {inputText}</p>
            </div>
            <div className="for-chimae-font">
                <h2 style={{ textAlign: 'center' }}>초대하려는 가족의 닉네임을 입력하세요.</h2>
                <h2 style={{ textAlign: 'center' }}>며느리, 사위, 손자, 손녀 등 쉬운 닉네임으로 설정하면 좋아요.</h2>
            </div>
            <div>
                <input style={{ textAlign: 'center', width: '300px', height: '45px' }}
                    className="invite-by-id-input"
                    type="text"
                    value={inputText_nickname}
                    onChange={handleInputChange_nickname}
                />
                <p style={{ textAlign: 'center' }}>입력하신 가족의 닉네임: {inputText_nickname}</p>
            </div>
            <button className="invite-by-id-button" onClick={handleCompleteButtonClick}>
                가족 초대하기
            </button>
            <Nav />
        </div>
    );
};

export default InviteById;