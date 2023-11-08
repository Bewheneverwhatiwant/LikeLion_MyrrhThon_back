import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './ClickedMyDiary.scss';

//화면 Main(메인화면) 컴포넌트를 만든다
const ClickedMyDiary = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleCompleteButtonClick = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/mydiarypage');
    };

    return (
        <div className="iphone-frame">
            <Header />
            <div className="content clicked-my-diary-column">
                <p>이렇게 일기가 작성되었어요.</p>
                <div className="my-diary-pop"></div>
                <div className="sizedbox"></div>
                <button className="clicked-my-diary-button" onClick={handleCompleteButtonClick}>
                    나의 일기장 목록으로 돌아가기
                </button>
            </div>
            <Nav />
        </div>
    );
};

export default ClickedMyDiary;