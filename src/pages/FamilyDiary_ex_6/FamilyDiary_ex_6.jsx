import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './FamilyDiary_ex_6.scss';
import profile from '../../assets/icon_profile.svg';

//화면 Main(메인화면) 컴포넌트를 만든다
const FamilyDiary_ex_6 = () => {
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
                            <p className="nickname">삼촌입니다</p>
                        </div>
                    </div>
                    <p>옷 따뜻하게 입고 다녀야 합니다. 우리 가족!!</p>
                    <div className="line-border"></div>
                </div>
                <div className="sizedbox"></div>
                <div className="family-diary-pop" style={{borderStyle:'none'}}>
                    날씨가 많이 춥습니다. 어머님도, 동생도, 우리 조카들도 옷 꽁꽁 여미고 다녀야 감기 들지 않습니다. 오늘도 파이팅하시고, 어머님 사랑합니다.^^
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

export default FamilyDiary_ex_6;