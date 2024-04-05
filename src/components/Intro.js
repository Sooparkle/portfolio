import { ReactComponent as DownAllow } from "../assets/DownAllow.svg";
import setting from "../assets/setting.svg";

export const Intro = () => {
  return (
    <div div className="intro-wrap">
      <div className="intro-top">a Manager</div>
      <div className="intro-middle">
        <span>S</span>
        <span>O</span>
        <span>O</span>
        <span>H</span>
        <span>A</span>
        <span>N</span>
        <span>'</span>
        <span>s</span>
        <br />
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        <span>F</span>
        <span>O</span>
        <span>L</span>
        <span>I</span>
        <span>O</span>
      </div>
      <div className="intro-end">Front-End</div>
      <div className="intro-allow">
        <DownAllow className="intro-down-allow" />
      </div>
      
        {/* <img src={setting} className="svg-container" alt="톱니바퀴" />
        <img src={setting} className="svg-container2" alt="톱니바퀴" />
        <img src={setting} className="svg-container3" alt="톱니바퀴" />
        <img src={setting} className="svg-container4" alt="톱니바퀴" />
         */}
    </div>
  );
};
