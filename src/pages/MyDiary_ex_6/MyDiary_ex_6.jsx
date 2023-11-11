import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './MyDiary_ex_6.scss';
import profile from '../../assets/icon_profile.svg';
import icon_profile_4 from '../../assets/icon_profile_4.jpg';
import icon_profile_6 from '../../assets/icon_profile_6.jpg';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyDiary_ex_6 = () => {
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

                <div className="make-nickname-start" style={{marginRight:'65%'}}>
                        <div className="make-row">
                            <img src={profile} alt="이미지" />
                            <p className="nickname" >할머니</p>
                        </div>
                    </div>
                <div>
                    <p>내가 죽고 나면 아들, 며느리가 기억해주기를..</p>
                </div>
                <div className="line-border"></div>
                <div className="my-diary-pop" style={{borderStyle:'none'}}><br/>
                    치매에 걸려 잘해준 것도 없고, 고생만 시켜서 미안한 맘 뿐이다. 건강했던 시절의 좋은 기억만 갖고 좋은 엄마로, 시어머니로 기억해주렴
                    <img src={icon_profile_6} alt="이미지" className="image-clicked" />
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

export default MyDiary_ex_6;