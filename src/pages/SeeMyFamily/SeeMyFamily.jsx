import React, { useState, useEffect } from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './SeeMyFamily.scss';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/icon_profile.svg';

//화면 Main(메인화면) 컴포넌트를 만든다
const SeeMyFamily = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용
    const handleWriteFamilyDiaryClick_invite = () => {
        navigate('/invitebyid');
    };

    //1) '홍길동' 자리에 대입
    const [patientName, setPatientName] = useState('');

    useEffect(() => {
        // Retrieve data from localStorage
        const storedPatientName = localStorage.getItem('patientName');

        // Update state only if data is present in localStorage
        if (storedPatientName) {
            setPatientName(storedPatientName);

        }
    }, []);

    return (
        <div className="iphone-frame" style={{ overflowY: 'scroll' }}>
            <Header />
            <div className="content my-diary-column">
                <div className="for-chimae-font">
                    <h2>내가 초대한 우리 가족이에요.</h2>
                    <h2>가족을 초대하면 가족일기장 기능을 사용할 수 있어요.</h2>
                </div>
                <div className="my-diary-column">
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                {patientName}(나)
                            </div>

                        </div>
                    </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                어머니 아들
                            </div>

                        </div>
                    </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                유리훈이 엄마
                            </div>

                        </div>
                    </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                삼촌
                            </div>

                        </div>
                    </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                훈이
                            </div>

                        </div>
                    </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                유리
                            </div>

                        </div>
                    </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                lny021102
                            </div>

                        </div>
                    </div>
                    <button className="invite-button" onClick={handleWriteFamilyDiaryClick_invite}>
                        <span>
                            <p>가족</p>
                            <p>초대</p>
                        </span>
                    </button>
                </div>
            </div>

            <Nav />
        </div>
    );
};

export default SeeMyFamily;