import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const AllStepChimae = () => {

    return (
        <div className="iphone-frame">
            <Header />
            <br/><br/>
            <div className="iphone-frame" style={{overflow:"scroll"}}>
                <div style={{borderRadius: '10px',background: '#ffffff', boxShadow: '0px 0px 3.52351px 3px rgba(86, 86, 86, 0.20) inset', margin:'10px', padding:'10px'}}>
                <h2>초기 치매 증상</h2>
                <p>가족, 동료들이 어르신의 문제를 알아차리기 시작하나, 아직은 혼자서 지낼 수 있는 수준</p>
                <p>예전 ‘최근 기억의 감퇴’ 시작</p>
                <p>음식 조리하다가 불 끄는 것을 잊음</p>
                <p>조금 전 말을 반복하거나 질문 되풀이</p>
                <p>대화 중 정확한 단어 대신 ‘그것’, ‘저것’으로 표현하거나 머뭇거림</p>
                <p>관심과 의욕이 없고 매사에 귀찮아 함</p>
                <p><b style={{fontSize:'22px'}}>준비물:</b> 메모장, 볼펜</p>
                </div>
                <div className="sizedbox"></div>

                <div style={{borderRadius: '10px',background: '#ffffff', boxShadow: '0px 0px 3.52351px 3px rgba(86, 86, 86, 0.20) inset', margin:'10px', padding:'10px'}}>
                <h2>중기 치매 증상</h2>
                <p>치매임을 쉽게 알 수 있는 단계로 어느 정도의 도움 없이는 혼자 지낼 수 없는 수준</p>
                <p>돈 계산 서투름, 가전제품 조작 못함</p>
                <p>며칠인지, 몇시인지, 어디인지 파악 못함</p>
                <p>평소 잘 알던 사람 혼동하나, 가족은 알아봄</p>
                <p>대답 못하고 머뭇거리거나 화를 내기도 함</p>
                <p>외출 시에 다른 사람의 도움 필요</p>
                <p>집안을 계속 배회하거나 반복적인 행동 거듭</p>
                <p>익숙한 장소인데도 길을 잃어버리는 경우 많음</p>
                <p><b style={{fontSize:'22px'}}>준비물: </b> 메모장, 볼펜, 보호자의 관찰 및 동행, 실종 대비 목걸이, GPS 기능이 있는 핸드폰</p>
                </div><br/>
                

                <div style={{borderRadius: '10px',background: '#ffffff', boxShadow: '0px 0px 3.52351px 3px rgba(86, 86, 86, 0.20) inset', margin:'10px', padding:'10px'}}>
                <h2>말기 치매 증상</h2>
                <p>인지기능이 현저히 저하, 정신행동ㆍ신경학적 증상 및 신체적 합병증 동반되어 독립생활 거의 불가능</p>
                <p>식사, 옷입기, 대소변 등 완전도움 필요</p>
                <p>대부분의 기억 상실</p>
                <p>배우자나 자녀를 알아보지 못함</p>
                <p>혼자 웅얼거리거나 전혀 말을 하지 못함</p>
                <p>근육강직, 보행장애, 거동힘듦</p>
                <p>대소변 실금, 욕창, 폐렴, 요도감염, 낙상 등으로 모든 기능을 잃고 누워 지냄</p>
                <p><b style={{fontSize:'22px'}}>준비물:</b> 보호자 또는 전문 간병인의 상주, 기저귀, 보행기 또는 휠체어, 큰 수건</p>
                </div>
            </div><div className="sizedbox"></div>
            <Nav />
        </div>
    );
};

export default AllStepChimae;