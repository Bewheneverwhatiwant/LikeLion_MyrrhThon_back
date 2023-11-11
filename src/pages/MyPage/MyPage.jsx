import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './MyPage.scss';
import icon_login from '../../assets/icon_login.svg';
import icon_logout from '../../assets/icon_logout.svg';
import icon_signup from '../../assets/icon_signup.svg';
import icon_deleteaccount from '../../assets/icon_delete.svg';
import mydiary from '../../assets/icon_bohoja_diary.svg';
import familydiary from '../../assets/icon_family_diary.svg';
import arrow from '../../assets/icon_go_mypage.svg';
import people from '../../assets/people.svg';
import { useLocation } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyPage = () => {
    //const location = useLocation();
    //const selectedImage = location.state ? (location.state.selectedImage || people) : people;

    const location = useLocation();
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();
    const [patientName, setPatientName] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        const storedPatientName = localStorage.getItem('patientName');
        const storedSelectedImage = localStorage.getItem('selectedImage') || people;

        if (storedPatientName) {
            setPatientName(storedPatientName);
        }

        setSelectedImage(storedSelectedImage);
    }, []);


    const handleButtonClick = (index) => {
        setSelected(index);

        // 버튼 클릭 시 페이지로 이동
        if (index === 0) {
            navigate('/familydiarypage');
        } else if (index === 1) {
            navigate('/mydiarypage');
        } else if (index === 2) {
            navigate('/login');
        } else if (index === 3) {
            navigate('/logout');
        } else if (index === 4) {
            navigate('/signup');
        } else if (index === 5) {
            navigate('/deleteaccount');
        } else if (index === 6) {
            navigate('/seemyfamily');
        }
    };

    return (
        <div className="iphone-frame" style={{ overflow: "scroll" }}>
            <Header />
            <br />
            <div className="my-page-text-column content">
                <img src={selectedImage} alt="이미지" className="image-overlay-people image" />
                <div className="my-page-text-row for-chimae-font">

                    <h2>반가워요,</h2>
                    <div className="just-row">
                        <h2>{patientName}</h2>
                        <h2>님!</h2>
                    </div>
                    <h2>오늘도 건강하세요.</h2>


                </div>
                <div>
                    <div>
                        <div style={{ background: '#F0F0F0', width: '390.001px', height: '1px' }}></div>
                        <button
                            className={`my-page-button ${selected === 2 ? 'selected' : ''}`}
                            onClick={() => handleButtonClick(2)}
                        >
                            <div className="mypage-row" style={{ marginLeft: '30px' }}>
                                <img src={icon_login} alt="이미지" />
                                <p style={{ marginRight: '160px' }}>로그인</p>
                            </div>
                        </button>

                        <div style={{ background: '#F0F0F0', width: '390.001px', height: '1px' }}></div>
                        <button
                            className={`my-page-button ${selected === 3 ? 'selected' : ''}`}
                            onClick={() => handleButtonClick(3)}
                        >
                            <div className="mypage-row" style={{ marginLeft: '30px' }}>
                                <img src={icon_logout} alt="이미지" />
                                <p style={{ marginRight: '155px' }}>로그아웃</p>
                            </div>
                        </button>

                        <div style={{ background: '#F0F0F0', width: '390.001px', height: '1px' }}></div>
                        <button
                            className={`my-page-button ${selected === 4 ? 'selected' : ''}`}
                            onClick={() => handleButtonClick(4)}
                        >
                            <div className="mypage-row" style={{ marginLeft: '30px' }}>
                                <img src={icon_signup} alt="이미지" />
                                <p style={{ marginRight: '140px' }}>회원 가입하기</p>
                            </div>
                        </button>

                        <div style={{ background: '#F0F0F0', width: '390.001px', height: '1px' }}></div>
                        <button
                            className={`my-page-button ${selected === 5 ? 'selected' : ''}`}
                            onClick={() => handleButtonClick(5)}
                        >
                            <div className="mypage-row" style={{ marginLeft: '30px' }}>
                                <img src={icon_deleteaccount} alt="이미지" />
                                <p style={{ marginRight: '140px' }}>회원 탈퇴하기</p>
                            </div>
                        </button>


                    </div>

                    <div className="gray-div">
                        <div className="diary-div">
                            <button style={{ width: '350px' }}
                                className={`my-page-button ${selected === 0 ? 'selected' : ''}`}
                                onClick={() => handleButtonClick(0)}
                            >
                                <div className="mypage-row">
                                    <div className="just-row">
                                        <div className="row-sizedbox"></div>
                                        <img src={familydiary} alt="이미지" />
                                        <div className="row-sizedbox"></div>
                                        가족끼리 나눠 보는 일기장
                                    </div>
                                    <img src={arrow} alt="이미지" />

                                </div>
                            </button>
                        </div><br />
                        <div className="diary-div">
                            <button style={{ width: '350px' }}
                                className={`my-page-button ${selected === 0 ? 'selected' : ''}`}
                                onClick={() => handleButtonClick(6)}
                            >
                                <div className="mypage-row">
                                    <div className="just-row">
                                        <div className="row-sizedbox"></div>
                                        <img src={familydiary} alt="이미지" />
                                        <div className="row-sizedbox"></div>
                                        초대된 우리 가족 보기
                                    </div>
                                    <img src={arrow} alt="이미지" />

                                </div>
                            </button>
                        </div><br />
                        <div className="diary-div">
                            <button style={{ width: '350px' }}
                                className={`my-page-button ${selected === 1 ? 'selected' : ''}`}
                                onClick={() => handleButtonClick(1)}
                            >
                                <div className="mypage-row">
                                    <div className="just-row">
                                        <div className="row-sizedbox"></div>
                                        <img src={mydiary} alt="이미지" />
                                        <div className="row-sizedbox"></div>
                                        나 혼자 보는 일기장
                                    </div>
                                    <img src={arrow} alt="이미지" />

                                </div>
                            </button>
                        </div>
                        <br />
                    </div>

                </div>
            </div>
            <Nav />
        </div>
    );
};

export default MyPage;