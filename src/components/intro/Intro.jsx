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
        All-Rounder<span className="intro-slogan-text"><span className="intro-slogan-text-sm">(디자인, 기획, 매니징, 개발)</span></span><br />
        <span className="intro-slogan-text">협업 기반</span> 플레이어<span className="intro-slogan-text-sm">(Player)</span>
      </div>
      <div className="intro-text">
        매니징을 해보니, 작은 UI/UX의 변화만으로 고객과 사용자가 변화하는 모습을 보고 궁금증 갖고 2023년부터 프론트 개발 공부를 시작했습니다.
      </div>
      {/* <div className="intro-end">Front-End</div> */}
      <div className="intro-allow">
        <DownAllow className="intro-down-allow" />
      </div>
      <RotatingCircleText />
    </div>
  );
};
