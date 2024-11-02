import { useEffect, useRef, useState } from "react";
import { ReactComponent as DownAllow } from "../../assets/DownAllow.svg";
import RotatingCircleText from "../CircleText/CircleText";
import { Slideword } from "../Slideword/Sildeword";
import "./Intro.scss";

export const Intro = () => {
  const introRef = useRef();
  const [ isVisiable, setIsVisiable ] = useState(false);


  return (
    <div 
      ref={introRef}
      className="intro-wrap"
    >
      <div className="intro-top">Portfolio</div>
      <div 
      className={`intro-middle ${isVisiable ? "activated" : ""}`}
      >
        빠르게 팀에 녹아들어 사용자에게<br />편리성을 생각하는 사람.
      </div>
      <div
        className="intro-text"
      >

        저는 1년 동안 프론트 엔드 개발 공부하를 했습니다. 더불어 기획자 겸 매니저 업무를 3년 이상 수행했습니다. 이러한 경험을 바탕으로 사용자의 홈페이지 사용 경험을 개선하길 좋아합니다. 
      </div>
      {/* <div className="intro-end">Front-End</div> */}
      <div className="intro-allow">
        <DownAllow className="intro-down-allow" />
      </div>
      <RotatingCircleText />
    </div>
  );
};
