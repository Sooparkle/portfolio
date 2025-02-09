import { useEffect, useRef, useState } from "react";
import { ReactComponent as DownAllow } from "../../assets/DownAllow.svg";
import RotatingCircleText from "../CircleText/CircleText";
import { Slideword } from "../Slideword/Sildeword";
import "./Intro.scss";

export const Intro = () => {
  const introRef = useRef();


  return (
    <div 
      ref={introRef}
      className="intro-wrap"
    >
      <div className="intro-top">Portfolio</div>
      <div 
      className='intro-middle'
      >
        빠르게 팀과 협업하고 <span className="intro-slogan-text">사용자를</span><br />
        생각하며 <span className="intro-slogan-text">공간을 디자인하는 사람</span>
      </div>
      <div
        className="intro-text"
      >
        무엇인가를 직접 만지고 분해, 조립하는 것을 좋아합니다. 매니저를 해보다가 직접 화면은 설계해 보는 것 또 어떤 재미가 있을까라는 궁금증을 2023년부터 갖기 시작했습니다.
      </div>
      {/* <div className="intro-end">Front-End</div> */}
      <div className="intro-allow">
        <DownAllow className="intro-down-allow" />
      </div>
      <RotatingCircleText />
    </div>
  );
};
