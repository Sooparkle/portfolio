import {ReactComponent as LinkedIn } from "../assets/Linkedin.svg";
import {ReactComponent as Github } from "../assets/github.svg";
import pic from "../assets/pic_min.JPG.jpg";

export const Who = () =>{

  return[
    <>  
      <div className='who-wrap'>
        <div className="who-img-wrap">
          <img src={pic} alt="증명사진"></img>
        </div>
        <div className="who-info-wrap">
          <p className="who-name">임수한</p>
          <p className="who-position">Frontend Developer</p>
          <p>
            일정과 기획이라는 숲에서 나무를 보고 <span>직접 심을 수 있는</span><br />
            프론트 엔드 개발작 하고 싶어서 커리어 전환을 결정했습니다.
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
  </>
  ]
}