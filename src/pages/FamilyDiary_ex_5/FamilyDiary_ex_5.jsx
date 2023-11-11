import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './FamilyDiary_ex_5.scss';
import picture from '../../assets/icon_familypicture_2.jpg';
import profile from '../../assets/icon_profile.svg';

//화면 Main(메인화면) 컴포넌트를 만든다
const FamilyDiary_ex_5 = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleCompleteButtonClick = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/familydiarypage');
    };

    const clickedmodify = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/modifyfamilydiary');
    };

    const clickeddelete = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        alert('가족일기가 삭제되었습니다!');
    };

    return (
        <div className="iphone-frame">
            <Header />
            <div className="content clicked-family-diary-column">
                <h2>이렇게 일기가 작성되었어요.</h2>
                <div>
                    <div className="make-nickname-start">
                        <div className="make-row">
                            <img src={profile} alt="이미지" />
                            <p className="nickname">유리훈이 엄마</p>
                        </div>
                    </div>
                    <p>어머님 기억이 안날 땐 여길 보고 기억하세요.</p>
                </div>
                <div className="line-border"></div>
                <div className="sizedbox"></div>
                <div className="family-diary-pop" style={{borderStyle:'none'}}>
                    김철수 - 남편, 김형만 - 아들, 채송화 - 며느리, 김유리 - 손녀, 김훈이 - 손자
                    <img src={picture} alt="이미지" className="image-clicked" />
                </div>
                <div className="sizedbox"></div>
                <button className="clicked-family-diary-button" onClick={handleCompleteButtonClick}>
                    우리 가족 일기장 목록으로 돌아가기
                </button>
                <div className="sizedbox"></div>

            </div>
            <Nav />
        </div>
    );
};

export default FamilyDiary_ex_5;