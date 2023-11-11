import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './FamilyDiaryPage.scss';
import { useNavigate } from 'react-router-dom';
import HeaderNavigation from "../../component/HeaderNavigation/HeaderNavigation";
import calender from '../../assets/diary_calander.svg';
import picture from '../../assets/icon_familypicture.jpg';
import picture_2 from '../../assets/icon_familypicture_2.jpg';
import picture_3 from '../../assets/icon_profile_3.jpg';

const FamiliDiaryPage = () => {

    const navigate = useNavigate();

    const handleWriteFamilyDiaryClick = () => {
        navigate('/writefamilydiary');
    };

    const handleWriteFamilyDiaryClick_invite = () => {
        navigate('/invitebyid');
    };

    const move_ex_1 = () => {
        navigate('/familydiary_ex_1');
    };
    const move_ex_2 = () => {
        navigate('/familydiary_ex_2');
    };
    const move_ex_3 = () => {
        navigate('/familydiary_ex_3');
    };
    const move_ex_4 = () => {
        navigate('/familydiary_ex_4');
    };
    const move_ex_5 = () => {
        navigate('/familydiary_ex_5');
    };
    const move_ex_6 = () => {
        navigate('/familydiary_ex_6');
    };

    return (
        <div className="iphone-frame" style={{ overflowY: 'scroll' }}>
            <Header />

            <HeaderNavigation />
            <div className="content family-diary-column">
                <div className="for-chimae-font">
                    <b>쑥스러워서 직접 말하지 못했던 속마음을 가족들에게 고백하세요.</b>
                    <b>함께 찍은 가족 사진, 동영상도 공유하면서 가족을 잊지 말아요.</b>
                    <br />
                </div>
                <div className="family-diary-column">
                    <div>
                        <div className='calender-text'>
                            <img src={calender} alt="이미지" />
                            오늘
                        </div>
                        <button className='calender-row' onClick={move_ex_1}>
                            <div className="calender-column">
                                <div>12</div>
                                <div>일</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                오늘 할머니가 자꾸 깜빡해서 미안해~^^
                            </div>
                        </button>
                    </div>
                    <div className="sizedbox"></div>
                    <div>
                        <div className='calender-text'>
                            <img src={calender} alt="이미지" />
                            어제
                        </div>
                        <button className='calender-row' onClick={move_ex_2}>
                            <div className="calender-column">
                                <div>11</div>
                                <div>토</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                치매에 걸렸어도 우리 딸 여전히 기억하고 사랑한다
                                <div className="sizedbox"></div>
                                <img src={picture_3} alt="이미지" className="image-familypage" />
                            </div>
                        </button>
                    </div>
                    <div className="sizedbox"></div>
                    <div>
                        <div className='calender-text'>
                            <img src={calender} alt="이미지" />
                            지난주
                        </div>
                        <button className='calender-row' onClick={move_ex_3}>
                            <div className="calender-column">
                                <div>10</div>
                                <div>금</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                우리 가족 저번에 설악산 갔을 때~^^
                            </div>
                            <div className="sizedbox"></div>
                            <img src={picture} alt="이미지" className="image-familypage" />
                        </button>
                        <button className='calender-row' onClick={move_ex_4}>
                            <div className="calender-column">
                                <div>10</div>
                                <div>금</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                우리 가족 모두 힙을 냅시다. 할머니는 다시 건강해지실 거야...
                            </div>
                        </button>

                    </div>
                    <div className='sizedbox'></div>
                    <div>

                        <div className='calender-text'>
                            <img src={calender} alt="이미지" />
                            저번달
                        </div>
                        <button className='calender-row' onClick={move_ex_5}>
                            <div className="calender-column">
                                <div>31</div>
                                <div>목</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                어머님 기억이 안날 땐 여길 보고 기억하세요.
                                <div className="sizedbox"></div>
                                <img src={picture_2} alt="이미지" className="image-familypage" />
                            </div>
                        </button>
                        <button className='calender-row' onClick={move_ex_6}>
                            <div className="calender-column">
                                <div>31</div>
                                <div>목</div>
                            </div>
                            <div className='sizedbox-row'></div>
                            <div className='title-start'>
                                옷 따뜻하게 입고 다녀야 합니다. 우리가족 !!
                            </div>
                        </button>
                        <div className="sizedbox"></div>
                    </div>
                </div>
            </div>
            <button className="add-button" onClick={handleWriteFamilyDiaryClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                    <path d="M16.3777 0.58567C15.9792 0.210668 15.4388 0 14.8752 0C14.3117 0 13.7713 0.210668 13.3728 0.58567L12.4361 1.4672L15.4411 4.29539L16.3777 3.41387C16.7762 3.0388 17 2.53015 17 1.99977C17 1.46939 16.7762 0.960734 16.3777 0.58567ZM14.5822 5.10378L11.5772 2.27558L1.7415 11.5327C1.2419 12.0027 0.874638 12.5825 0.672922 13.2196L0.0253014 15.2653C-0.00596561 15.364 -0.00829759 15.4689 0.0185523 15.5688C0.0454022 15.6686 0.100435 15.7598 0.177829 15.8326C0.255222 15.9055 0.352097 15.9573 0.458203 15.9825C0.564309 16.0078 0.6757 16.0056 0.780589 15.9762L2.95417 15.3667C3.63111 15.1768 4.24711 14.8312 4.74646 14.3609L14.5822 5.10378Z" fill="white" />
                </svg>
            </button>

            <button className="invite-button" onClick={handleWriteFamilyDiaryClick_invite}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C14.3261 12 15.5979 12.5268 16.5355 13.4645C17.4732 14.4021 18 15.6739 18 17V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20C16.7348 20 16.4804 19.8946 16.2929 19.7071C16.1054 19.5196 16 19.2652 16 19V17C16 16.2044 15.6839 15.4413 15.1213 14.8787C14.5587 14.3161 13.7956 14 13 14H5C4.20435 14 3.44129 14.3161 2.87868 14.8787C2.31607 15.4413 2 16.2044 2 17V19C2 19.2652 1.89464 19.5196 1.70711 19.7071C1.51957 19.8946 1.26522 20 1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V17C0 15.6739 0.526784 14.4021 1.46447 13.4645C2.40215 12.5268 3.67392 12 5 12H13ZM17 6C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V8H19C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9C20 9.26522 19.8946 9.51957 19.7071 9.70711C19.5196 9.89464 19.2652 10 19 10H18V11C18 11.2652 17.8946 11.5196 17.7071 11.7071C17.5196 11.8946 17.2652 12 17 12C16.7348 12 16.4804 11.8946 16.2929 11.7071C16.1054 11.5196 16 11.2652 16 11V10H15C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.1054 9.51957 14 9.26522 14 9C14 8.73478 14.1054 8.48043 14.2929 8.29289C14.4804 8.10536 14.7348 8 15 8H16V7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6ZM9 0C10.3261 0 11.5979 0.526784 12.5355 1.46447C13.4732 2.40215 14 3.67392 14 5C14 6.32608 13.4732 7.59785 12.5355 8.53553C11.5979 9.47322 10.3261 10 9 10C7.67392 10 6.40215 9.47322 5.46447 8.53553C4.52678 7.59785 4 6.32608 4 5C4 3.67392 4.52678 2.40215 5.46447 1.46447C6.40215 0.526784 7.67392 0 9 0ZM9 2C8.60603 2 8.21593 2.0776 7.85195 2.22836C7.48797 2.37913 7.15726 2.6001 6.87868 2.87868C6.6001 3.15726 6.37913 3.48797 6.22836 3.85195C6.0776 4.21593 6 4.60603 6 5C6 5.39397 6.0776 5.78407 6.22836 6.14805C6.37913 6.51203 6.6001 6.84274 6.87868 7.12132C7.15726 7.3999 7.48797 7.62087 7.85195 7.77164C8.21593 7.9224 8.60603 8 9 8C9.79565 8 10.5587 7.68393 11.1213 7.12132C11.6839 6.55871 12 5.79565 12 5C12 4.20435 11.6839 3.44129 11.1213 2.87868C10.5587 2.31607 9.79565 2 9 2Z" fill="white" />
                </svg>
            </button>
            <Nav />
        </div>
    );
};

export default FamiliDiaryPage;
