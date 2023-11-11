import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './FamilyDiary_ex_1.scss';
import profile from '../../assets/icon_profile.svg';

//화면 Main(메인화면) 컴포넌트를 만든다
const FamilyDiary_ex_1 = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleCompleteButtonClick = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/familydiarypage');
    };

    const clickedmodify = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/modifymydiary');
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
                            <p className="nickname">할머니</p>
                        </div>
                    </div>
                    <p>오늘 할머니가 자꾸 깜빡해서 미안해~^^</p>
                </div>
                <div className="line-border"></div>
                <div className="sizedbox"></div>
                <div className="family-diary-pop" style={{borderStyle:'none'}}>
                    치매에 걸리니 자주 잊어버리는구나. 리모콘도, 손주들 얼굴도... 할머니가 다 기억해주지 못해서 미안해. 항상 사랑한다. 내 자식들, 내 손주들.
                </div>
                <div className="sizedbox"></div>
                <button className="clicked-family-diary-button" onClick={handleCompleteButtonClick}>
                    우리 가족 일기장 목록으로 돌아가기
                </button>
                <div className="sizedbox"></div>
                <div className="make-row">
                    <button className="modify" onClick={clickedmodify}>
                        수정하기
                    </button>
                    <div className="sizedbox-row"></div>
                    <button className="modify" onClick={clickeddelete}>
                        삭제하기
                    </button>

                </div>
                <div className="sizedbox-bottom"></div>
            </div>
            <Nav />
        </div>
    );
};

export default FamilyDiary_ex_1;