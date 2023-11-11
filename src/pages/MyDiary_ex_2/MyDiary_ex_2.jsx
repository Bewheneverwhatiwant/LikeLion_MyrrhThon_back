import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './MyDiary_ex_2.scss';
import profile from '../../assets/icon_profile.svg';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyDiary_ex_2 = () => {
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
                    <p>나중에 나도 대소변을 못가리게 될까?</p>
                    <div className="line-border"> </div>
                </div>
                <div className="my-diary-pop" style={{borderStyle:'none'}}>
                    <br/>
                    열심히 응원해주는 가족들에게는 말을 못하겠다. 사실 너무 무섭다. 언젠가는 모든 기억을 잃어버리게 되는 건 아닌지, 대소변을 못가리게 되면 어쩌지... 너무 무섭다.
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

export default MyDiary_ex_2;