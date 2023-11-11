import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useNavigate } from 'react-router-dom';
import './MyDiary_ex_1.scss';
import profile from '../../assets/icon_profile.svg';
import flower from '../../assets/flower.jpg';

//화면 Main(메인화면) 컴포넌트를 만든다
const MyDiary_ex_1 = () => {
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
                            <div className="make-row"style={{marginRight:'65%'}}>
                            <img src={profile} alt="이미지" />
                            <p className="nickname" >할머니</p>
                        </div>
                    <p>가족들에게 미안했던 하루... 창피했다.</p>
                    <div className="line-border"> </div>
                    <div className="make-nickname-start">

                    </div>
                </div><br/>
                <div className="my-diary-pop" style={{borderStyle:'none'}}>
                    아들이 대소변을 갈아주었다. 남편이 날 씻겨주는데 창피해서 괜히 소리질렀다. 난 언제까지 남의 손길에 의지해야 하는건지... 터널 끝이 보이지 않아 너무 슬프다.
                    <img src={flower} alt="이미지" className="image-clicked" />
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

export default MyDiary_ex_1;