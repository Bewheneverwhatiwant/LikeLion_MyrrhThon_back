import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import people from '../../assets/people.svg';
import grandpa from '../../assets/grandpa.jpg';
import grandpa_black from '../../assets/grandpa_black.jpg';
import woman from '../../assets/woman.png';
import woman_curly from '../../assets/woman_curly.png';
import './ChangeCharacter.scss';

const ChangeCharacter = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(people);

    const handleChangeImage = (newImage) => {
        setSelectedImage(newImage);
    };

    const handleBack = () => {
        // Save selectedImage to localStorage
        localStorage.setItem('selectedImage', selectedImage);
        // Navigate back to the main screen
        navigate('/main', { state: { selectedImage } });
    };
    return (
        <div className="iphone-frame">
            <Header />
            <div className="content change-colum for-margin">
                <div>
                    <img
                        src={
                            selectedImage === people
                                ? people
                                : selectedImage === grandpa
                                    ? grandpa
                                    : selectedImage === grandpa_black
                                        ? grandpa_black
                                        : selectedImage === woman
                                            ? woman
                                            : woman_curly
                        }
                        alt="이미지"
                    />
                </div>
                <div className="content change-column">
                    <button onClick={() => handleChangeImage(people)} className="change-button">
                        할머니
                    </button>
                    <div className="sizedbox"></div>
                    <button onClick={() => handleChangeImage(grandpa)} className="change-button">
                        할아버지
                    </button>
                    <div className="sizedbox"></div>
                    <button onClick={() => handleChangeImage(grandpa_black)} className="change-button">
                        까만 할아버지
                    </button>
                    <div className="sizedbox"></div>
                    <button onClick={() => handleChangeImage(woman)} className="change-button">
                        여자
                    </button>
                    <div className="sizedbox"></div>
                    <button onClick={() => handleChangeImage(woman_curly)} className="change-button">
                        파마한 여자
                    </button>
                </div>
                <div className="sizedbox"></div>
                <div>
                    <button onClick={handleBack} className="change-back-button">
                        캐릭터 선택 완료
                    </button>
                </div>

            </div>
            <Nav />
        </div>
    );
};

export default ChangeCharacter;
