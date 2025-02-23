import pic1 from "../../assets/Osaka.jpeg";
import pic1_s from "../../assets/Osaka_s.png";
import pic0 from "../../assets/computer.png";
import pic0_s from "../../assets/computer_s.png";

import { ImageSlider } from "../imageSlider/ImageSlider";
import "./Who.scss";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa6";
import { ContactSmall } from "../ContactSmall/ContactSmall";

export const Who = () => {
  const IMAGES = [
    {
      large: pic0,
      small : pic0_s
    },
    {
      large : pic1,
      small : pic1_s
    }
  ];
  
  const [clickStates, setClickStates] = useState({
    health: false,
    read: false,
    tea: false
  });

  const positions = ["Planner", "Manager", "Front-end Developer"];

  const infoDetails = [
    {
      id: "health",
      title: "PROGRAMMER",
      description: "프로그램에 있어서 깊이 생각하고 스스로 고민하고 찾아보면서 끝임없이 배우려 합니다.",
      highlightText: "깊이 생각하고 스스로 고민하고 찾아보면서 끝임없이 배우려 합니다."
    },
    {
      id: "read",
      title: "READER",
      description: "세상의 다양한 지식에 대한 호기심이 많아 저렴하고 검증된 자료를 바탕으로 작성된 책을 통해 지식 습득을 좋아합니다",
      highlightText: "저렴하고 검증된 자료를 바탕으로 작성된 책을 통해 지식 습득을"
    },
    // {
    //   id: "tea",
    //   title: "TEA",
    //   description: "차(TEA)를 좋아합니다. 커피를 마시지 않아 대신 보이차, 홍차, 허브차 등을 마십니다.",
    //   highlightText: "대신 보이차, 홍차, 허브차 등을 마십니다."
    // }
  ];

  const handleClick = (id) => {
    setClickStates(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="who-wrap container">
      <h2>WHO AM I</h2>
      <div className="who-content">
        <div className="who-img-wrap">
          <ImageSlider images={IMAGES} />
        </div>
        <div className="who-info-wrap">
          <p className="who-name">임수한</p>
          <div className="who-positions-container">
            {positions.map((position, index) => (
              <p key={index} className="who-position">{position}</p>
            ))}
          </div>

          <div>
            {infoDetails.map(({ id, title, description, highlightText }) => (
              <div
                key={id}
                onClick={() => handleClick(id)}
                className="who-info-detail"
              >
                <ul>
                  <li>{title}</li>
                  <li>
                    <FaCaretRight
                      className={`right-btn ${clickStates[id] ? "activated" : ""}`}
                    />
                  </li>
                </ul>
                <p className={`${clickStates[id] ? "activated" : ""}`}>
                  {description.replace(highlightText, '')}
                  <span>{highlightText}</span>
                </p>
              </div>
            ))}
          </div>
          <ContactSmall />
        </div>
      </div>
    </div>
  );
};