import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './MyDiaryPage.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyDiaryPage = () => {
    const buttonCount = 13; // 생성할 버튼의 개수
    const buttons = Array.from({ length: buttonCount }, (_, index) => index);

    const navigate = useNavigate(); // useNavigate 훅을 사용
    const handleWriteMyDiaryClick = () => {
        // '+ 버튼' 클릭 시 '/writefamilydiary' 페이지로 이동
        navigate('/writemydiary');
    };

    return (
        <div className="iphone-frame" style={{ overflowY: 'scroll' }}>
            <Header />
            <div className="content my-diary-column">
                <div className="for-chimae-font">
<<<<<<< HEAD
                    <b style={{fontSize:'15px'}}>가족들에게 고백하기 힘든 속마음을 적어보세요.</b>
                    <b style={{fontSize:'15px'}}>나만 볼 수 있는 일기장이에요.</b>
                </div><br/>
                <div>
                    {divs.map((index) => (
                        <div
=======
                    <h2>가족들에게 고백하기 힘든 속마음을 적어보세요.</h2>
                    <h2>나만 볼 수 있는 일기장이에요.</h2>
                    <h2>오늘 찍은 사진, 내 모습을 촬영한 동영상도 함께 기록해보세요.</h2>
                </div>
                <div className="my-diary-column">
                    {buttons.map((index) => (
                        <button
>>>>>>> back/master
                            key={index}
                            className="my-diary"
                            onClick={() => navigate('/clickedmydiary')}
                        >
                            {index}번째 나만의 일기
                        </button>
                    ))}
                </div>
<<<<<<< HEAD
            <button className="fixed-button" onClick={handleWriteMyDiaryClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path d="M16.3777 0.58567C15.9792 0.210668 15.4388 0 14.8752 0C14.3117 0 13.7713 0.210668 13.3728 0.58567L12.4361 1.4672L15.4411 4.29539L16.3777 3.41387C16.7762 3.0388 17 2.53015 17 1.99977C17 1.46939 16.7762 0.960734 16.3777 0.58567ZM14.5822 5.10378L11.5772 2.27558L1.7415 11.5327C1.2419 12.0027 0.874638 12.5825 0.672922 13.2196L0.0253014 15.2653C-0.00596561 15.364 -0.00829759 15.4689 0.0185523 15.5688C0.0454022 15.6686 0.100435 15.7598 0.177829 15.8326C0.255222 15.9055 0.352097 15.9573 0.458203 15.9825C0.564309 16.0078 0.6757 16.0056 0.780589 15.9762L2.95417 15.3667C3.63111 15.1768 4.24711 14.8312 4.74646 14.3609L14.5822 5.10378Z" fill="white"/>
            </svg>
            </button>
=======
                <button className="fixed-button" onClick={handleWriteMyDiaryClick}>
                    <span>+</span>
                </button>
>>>>>>> back/master
            </div>
            <Nav />
        </div>
    );
};

export default MyDiaryPage;