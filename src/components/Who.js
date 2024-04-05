import {ReactComponent as LinkedIn } from "../assets/Linkedin.svg";
import {ReactComponent as Github } from "../assets/github.svg";
import pic from "../assets/main_pic.JPG.jpg";

export const Who = () =>{

  return[
    <div className="who-wrap container">
      <h2>WHO AM I</h2>  
      <div className='who-content'>
        <div className="who-img-wrap">
          <img src={pic} alt="증명사진"></img>
        </div>
        <div className="who-info-wrap">
          <p className="who-name">임수한</p>
          <p className="who-position">Front-end Developer</p>
          <p>
            기획자의 경험으로 <span>프로젝트의 전체를 이해</span>하고 매니저의 경험으로 <span>다양한 팀과 소통 경험을 바탕으로 </span>팀의 목적에 부합하는 프론트 엔드 개발자입니다.
          </p>
          <p></p>
          <div className="who-icons-wrap">
            <LinkedIn
              onClick={()=>window.open('https://www.linkedin.com/in/sooohan/', '_blank')}
              />
            <Github 
              onClick={()=>{window.open("https://github.com/Sooparkle", "_blacnk")}}
            />
          </div>
        </div>
      </div>
  </div>
  ]
}