import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './FamilyDiary_ex_2.scss';
import profile from '../../assets/icon_profile.svg';
import picture_3 from '../../assets/icon_profile_3.jpg';

//화면 Main(메인화면) 컴포넌트를 만든다
const FamilyDiary_ex_2 = () => {
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
                            <p className="nickname">할머니</p>
                        </div>
                    </div>
                    <p>치매에 걸렸어도 우리 딸 여전히 너무 사랑해</p>
                </div>
                <div className="line-border"></div>
                <div className="sizedbox"></div>
                <div className="family-diary-pop" style={{borderStyle:'none'}}>
                    엄마가 많이 사랑한다. 70이 다 되어가고, 우리 딸도 50을 바라보네... 50이 되어도 너는 아직 내 아기야. 엄마가 세상에 있든 없든, 엄마는 우리 딸을 항상 기억한다.
                    <img src={picture_3} alt="이미지" className="image-clicked" />
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

export default FamilyDiary_ex_2;