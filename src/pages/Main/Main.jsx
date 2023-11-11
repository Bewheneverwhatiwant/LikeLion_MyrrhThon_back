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
    const navigate = useNavigate();
    const location = useLocation();
    const [patientName, setPatientName] = useState('');
    const [daysWithDementia, setDaysWithDementia] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const storedPatientName = localStorage.getItem('patientName');
        const storedDaysWithDementia = localStorage.getItem('daysWithDementia');
        const storedSelectedImage = localStorage.getItem('selectedImage') || people;

        if (storedPatientName && storedDaysWithDementia) {
            setPatientName(storedPatientName);
            setDaysWithDementia(storedDaysWithDementia);
        }

        setSelectedImage(storedSelectedImage);
    }, []);

    const handleCompleteButtonClick_character = () => {
        localStorage.setItem('selectedImage', selectedImage);
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

    const renderSymptoms = () => {
        if (daysWithDementia <= 100) {
            return (
                <div>
                    <div className="for-text"><br />
                        <pr>오래 전에 경험했던 일은 잘 기억하나, </pr>
                        <pr>조금 전에 했던 일 또는 생각을 자주 잊어버린다. </pr>
                        <pr>음식을 조리하다가 불 끄는 것을 잊어버리는 경우가 빈번해진다. </pr>
                        <pr>평소 잘 알던 사람의 이름이 생각나지 않는다.</pr>
                    </div><br />
                </div>
            );
        } else if (daysWithDementia <= 200) {
            return (
                <div>
                    <div className="for-text"><br />
                        <pr>길을 잃어버리고 잊어버리는 증상이 매우 심해진다.</pr>
                        <pr>가족을 의심하거나 소리지르는 등 폭력적인 증세가 나타날 수 있다.</pr>
                        <pr>했던 말을 반복하고, 배설/배뇨 실수를 할 수 있다.</pr>
                        <pr>접촉을 아예 거부하거나 좋아하는 사람만 찾을 수 있다.</pr>
                    </div><br />
                </div>
            );
        } else {
            return (
                <div>
                    <div className="for-text"><br />
                        <pr>보호자 없이는 거동이 어려워지고 말수가 줄어든다.</pr>
                        <pr>환각/환청 증상이 심화되어 공격적이거나 우울한 증세가 심해질 수 있다.</pr>
                        <pr>배설/배뇨 활동 및 식사 활동에 보호자의 도움이 반드시 필요하다.</pr>
                        <pr>낙상사고, 합병증에 대한 주의가 각별히 필요하다.</pr>
                    </div><br />
                </div>
            );
        }
    };

    const renderJunbi = () => {
        if (daysWithDementia <= 100) {
            return (
                <div>
                    <p className="for-text">메모장과 볼펜을 가지고 다니면서 잊어버리는 것들을 적어놓으세요.</p>
                </div>
            );
        } else if (daysWithDementia <= 200) {
            return (
                <div>
                    <p className="for-text">GPS 장치를 소지하게 하고, 손수건과 여벌옷을 준비하세요. </p>
                </div>
            );
        } else {
            return (
                <div>
                    <p className="for-text">기저귀 또는 성인용 배변 패드를 준비하시고, 낙상 위험이 없는 병상침대를 사용하세요.</p>
                </div>
            );
        }
    };

    return (
        <div className="iphone-frame" style={{ overflowY: 'scroll' }}>
            <Header />

            <div className="content main-column">

                <div className="image-container main-row">
                    <div className="main-column">
                        <img src={selectedImage} alt="이미지" className="image-overlay-people image" />
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
                        {renderSymptoms()}
                    </div>
                </div>
                <div className="sizedbox"></div>
                <div className="div-discript-div">
                    <div className="main-column">
                        <div className="discript-div">
                            준비물
                        </div>

                        {renderJunbi()}
                    </div>
                </div>
                <br /><br /><br />
            </div>
            <Nav />
        </div>
    );
};

export default Main;