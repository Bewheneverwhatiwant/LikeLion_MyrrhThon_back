import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {

    return (
        <div>
            <Header />
            <div className="content">
                <p>여기는 마이 페이지입니다. 로그아웃, 회원탈퇴, 내 일기장 보기 등등...</p>
            </div>
            <Nav />
        </div>
    );
};

export default Main;