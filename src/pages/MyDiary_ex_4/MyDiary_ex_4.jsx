import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './MyDiary_ex_4.scss';
import profile from '../../assets/icon_profile.svg';
import icon_profile_4 from '../../assets/icon_profile_4.jpg';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyDiary_ex_4 = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleCompleteButtonClick = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/mydiarypage');
    };

    const clickedmodify = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/modifymydiary');
    };

    const clickeddelete = () => {
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        alert('나만의 일기가 삭제되었습니다!');
    };

    return (
        <div className="iphone-frame">
            <Header />
            <div className="content clicked-my-diary-column">
                <h2>이렇게 일기가 작성되었어요.</h2>
                <div>
                        <div className="make-nickname-start" style={{marginRight:'65%'}}>
                        <div className="make-row">
                            <img src={profile} alt="이미지" />
                            <p className="nickname">할머니</p>
                        </div>
                    </div>
                    <p>며느리는 딸이 될 수 없다.. 씁쓸하다.</p>
                    <div className="line-border"></div>

                </div>
                <div className="my-diary-pop" style={{borderStyle:'none'}}> <br/>
                    손주 얼굴이 갈 수록 희미해지고, 아들 내외 얼굴이 기억이 점점 안나고... 자주 보고싶고, 얘기도 많이 하고싶은데 며느리는 나를 부담스러워 하는 것 같다. 서글프다...
                    <img src={icon_profile_4} alt="이미지" className="image-clicked" />
                </div>
                <div className="sizedbox"></div>
                <button className="clicked-my-diary-button" onClick={handleCompleteButtonClick}>
                    나의 일기장 목록으로 돌아가기
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

export default MyDiary_ex_4;