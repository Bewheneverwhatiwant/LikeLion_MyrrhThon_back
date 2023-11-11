import React from "react";
import { useState, useEffect } from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { Link } from 'react-router-dom';
import './Main.scss';
import people from '../../assets/people.svg';
import balloon from '../../assets/talkballoon.svg';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용
    const location = useLocation();
    const selectedImage = location.state ? (location.state.selectedImage || people) : people;

    //1) '홍길동' 자리에 대입
    const [patientName, setPatientName] = useState('');
    //2) '14' 자리에 대입
    const [daysWithDementia, setDaysWithDementia] = useState('');

    useEffect(() => {
        // 여기서는 location.state에서 데이터를 가져와 state를 업데이트합니다.
        // 적절한 키를 사용하여 가져올 수 있습니다. 예를 들어, location.state.patientName, location.state.daysWithDementia 등
        setPatientName(location.state ? location.state.patientName : '');
        setDaysWithDementia(location.state ? location.state.daysWithDementia : '');
    }, [location.state]);

    const handleCompleteButtonClick_character = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/changecharacter');
    };
    const handleCompleteButtonClick_whatischimae = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/whatischimae');
    };
    const handleCompleteButtonClick_allthing = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/allstepchimae');
    };
    const handleCompleteButtonClick_forfamily = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/familyguide');
    };

    return (
        <div className="iphone-frame" style={{ overflowY: 'auto' }}>
            <Header />

            <div className="content main-column">

                <div className="image-container main-row">
                    <div className="main-column">
                        <img src={selectedImage} alt="이미지" className="image-overlay-people" />
                        <button className="character-button" onClick={handleCompleteButtonClick_character}>
                            캐릭터 바꾸기
                        </button>
                    </div>

                </div>
                <div>
                    <div className="main-row">
                        <h2 className="for-main-chimae-font">{patientName}</h2>
                        <h2 className="for-main-chimae-font">님</h2>
                    </div>

                    <div className="main-row">
                        <h2>치매와 함께한지</h2>
                        <h2>{daysWithDementia}</h2>
                        <h2>일 째</h2>
                    </div>
                </div>
                <button className="chimae-button" onClick={handleCompleteButtonClick_whatischimae}>
                    치매란 어떤 병인가요?
                </button>
                <br />
                <button className="chimae-button" onClick={handleCompleteButtonClick_allthing}>
                    치매 단계별 증상/준비물 모두 보기
                </button>
                <br />
                <button className="chimae-button" onClick={handleCompleteButtonClick_forfamily}>
                    치매 환자 가족을 위한 가이드 보기
                </button>
                <br />
                <div className="div-discript-div">
                    <div className="main-column">
                        <div className="discript-div">
                            증상
                        </div>
                        <div className="for-text">
                            <p>오래 전에 경험했던 일은 잘 기억하나,</p>
                            <p>조금 전에 했던 일 또는 생각을 자주 잊어버린다.</p>
                            <p>음식을 조리하다가 불 끄는 것을 잊어버리는 경우가 빈번해진다.</p>
                            <p>평소 잘 알던 사람의 이름이 생각나지 않는다.</p>
                        </div>
                    </div>
                </div>
                <div className="sizedbox"></div>
                <div className="div-discript-div">
                    <div className="main-column">
                        <div className="discript-div">
                            준비물
                        </div>

                        <p className="for-text">메모장과 볼펜을 가지고 다니면서 잊어버리는 것들을 적어놓으세요.</p>
                    </div>
                </div>
                <div className="sizedbox"></div>
            </div>


            <Nav />
        </div>
    );
};

export default Main;