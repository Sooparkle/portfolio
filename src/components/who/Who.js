import { ReactComponent as LinkedIn } from "../../assets/Linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import pic1 from "../../assets/Osaka.jpeg";
import pic2 from "../../assets/tea2.jpeg";
import pic3 from "../../assets/exercise.jpg";
import { ImageSlider } from "../imageSlider/ImageSlider";
import "./Who.scss";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa6";

export const Who = () => {
  const IMAGES = [pic1, pic2, pic3];
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
                setReadIsclicked(!isReadClicked);
              }}
              className="who-info-detail"
            >
              <ul>
                <li>Reader</li>
                <li>
                  <FaCaretRight
                    className={`right-btn ${isReadClicked ? "activated" : ""}`}
                  />
                </li>
              </ul>
              <p className={`${isReadClicked ? "activated" : ""}`}>
                세상의 다양한 지식에 대한 호기심이 많아{" "}
                <span>
                  저렴하고 검증된 자료를 바탕으로 작성된 책을 통해 지식을 습득을
                </span>
                좋아합니다(요즘은 뇌 과학 관련 서적에 관심이 갑니다).
              </p>
            </div>

            <div
              onClick={() => {
                setTeaIsclicked(!isTeaClicked);
              }}
              className="who-info-detail"
            >
              <ul>
                <li>TEA Enjoyer</li>
                <li>
                  <FaCaretRight
                    className={`right-btn ${isTeaClicked ? "activated" : ""}`}
                  />
                </li>
              </ul>

              <p className={`${isTeaClicked ? "activated" : ""}`}>
                커피를 마시지 않아 <span>대신 차(TEA)를 마십니다.</span>{" "}
                요즘은 보이생차를 마시고 있으며 여름이 다가오니 우롱차가 마시고
                싶어 집니다.
              </p>
            </div>

            <div
              onClick={() => {
                setHealthIsclicked(!isHealthClicked);
              }}
              className="who-info-detail"
            >
              <ul>
                <li>Health Manager</li>
                <li>
                  <FaCaretRight
                    className={`right-btn ${
                      isHealthClicked ? "activated" : ""
                    }`}
                  />
                </li>
              </ul>
              <p className={`${isHealthClicked ? "activated" : ""}`}>
                건강 관리를 위해 2년 전부터{" "}
                <span>꾸준히 주 2회 정도 헬스장</span>에 갑니다. 특히 허리와
                엉덩히 근육과 스트레칭에 관심이 많습니다.
              </p>
            </div>
          </div>

          <div className="who-icons-wrap">
            <LinkedIn
              onClick={() =>
                window.open("https://www.linkedin.com/in/sooohan/", "_blank")
              }
            />
            <Github
              onClick={() => {
                window.open("https://github.com/Sooparkle", "_blacnk");
              }}
            />
          </div>
        </div>
      </div>
    </div>,
  ];
};
