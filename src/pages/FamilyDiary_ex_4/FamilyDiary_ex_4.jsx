import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './FamilyDiary_ex_4.scss';
import profile from '../../assets/icon_profile.svg';

//화면 Main(메인화면) 컴포넌트를 만든다
const FamilyDiary_ex_4 = () => {
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
                            <p className="nickname">어머니 아들</p>
                        </div>
                    </div>
                    <p>우리 모두 힘을 냅시다. 다시 건강해지실 거야...</p>
                </div>
                <div className="line-border"></div>
                <div className="sizedbox"></div>
                <div className="family-diary-pop" style={{borderStyle:'none'}}>
                    우리 어머니 간병하느라 와이프도 고생이 많습니다. 할머니 심부름을 잘 해주는 우리 자식들도 기특하고... 지금처럼만 다들 이 시기를 잘 견디면, 할머니는 다시 건강해질 거야... 사랑한다 우리가족, 얼른 쾌차하세요 우리 어머니.
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

export default FamilyDiary_ex_4;