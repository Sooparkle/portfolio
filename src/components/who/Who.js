import { ReactComponent as LinkedIn } from "../../assets/Linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import pic1 from "../../assets/Osaka.jpeg";
import pic2 from "../../assets/tea2.jpeg";
import pic0 from "../../assets/computer.jpg";
import { ImageSlider } from "../imageSlider/ImageSlider";
import "./Who.scss";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa6";

export const Who = () => {
  const IMAGES = [ pic0, pic1, pic2];
  const [isReadClicked, setReadIsclicked] = useState(false);
  const [isTeaClicked, setTeaIsclicked] = useState(false);
  const [isHealthClicked, setHealthIsclicked] = useState(false);

  return [
    <div className="who-wrap container">
      <h2>WHO AM I</h2>
      <div className="who-content">
        <div className="who-img-wrap">
          <ImageSlider imageUrls={IMAGES} />
        </div>
        <div className="who-info-wrap">
          <p className="who-name">임수한</p>
          <p className="who-position">Front-end Developer</p>
          <div>
          <div
              onClick={() => {
                setHealthIsclicked(!isHealthClicked);
              }}
              className="who-info-detail"
            >
              <ul>
                <li>PROGRAMMER</li>
                <li>
                  <FaCaretRight
                    className={`right-btn ${
                      isHealthClicked ? "activated" : ""
                    }`}
                  />
                </li>
              </ul>
              <p className={`${isHealthClicked ? "activated" : ""}`}>
                프로그램에 있어서 <span>깊이 생각하고 스스로 고민하고 찾아보면서 끝임없이 배우려 합니다.</span>
              </p>
            </div>

            <div
              onClick={() => {
                setReadIsclicked(!isReadClicked);
              }}
              className="who-info-detail"
            >
              <ul>
                <li>READER</li>
                <li>
                  <FaCaretRight
                    className={`right-btn ${isReadClicked ? "activated" : ""}`}
                  />
                </li>
              </ul>
              <p className={`${isReadClicked ? "activated" : ""}`}>
                세상의 다양한 지식에 대한 호기심이 많아{" "}
                <span>
                  저렴하고 검증된 자료를 바탕으로 작성된 책을 통해 지식 습득을
                </span>
                {" "}좋아합니다
              </p>
            </div>

            <div
              onClick={() => {
                setTeaIsclicked(!isTeaClicked);
              }}
              className="who-info-detail"
            >
              <ul>
                <li>TEA</li>
                <li>
                  <FaCaretRight
                    className={`right-btn ${isTeaClicked ? "activated" : ""}`}
                  />
                </li>
              </ul>

              <p className={`${isTeaClicked ? "activated" : ""}`}>
                차(TEA)를 좋아합니다. 커피를 마시지 않아 <span>대신 보이차, 홍차, 허브차 등을 마십니다.</span>{" "}
              </p>
            </div>


          </div>

          {/* <div className="who-icons-wrap"> */}
            {/* <LinkedIn
              onClick={() =>
                window.open("https://www.linkedin.com/in/sooohan/", "_blank")
              }
            /> */}
            {/* <Github
              onClick={() => {
                window.open("https://github.com/Sooparkle", "_blacnk");
              }}
            /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  ];
};
