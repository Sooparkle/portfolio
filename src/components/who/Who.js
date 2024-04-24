import {ReactComponent as LinkedIn } from "../../assets/Linkedin.svg";
import {ReactComponent as Github } from "../../assets/github.svg";
import pic1 from "../../assets/Osaka.jpeg";
import pic2 from "../../assets/tea.jpeg";
import pic3 from "../../assets/teaPicker.jpg";
import { ImageSlider } from "../imageSlider/ImageSlider";
import "./Who.scss";

export const Who = () =>{
  const IMAGES = [ pic1, pic2, pic3];

  return[
    <div className="who-wrap container">
      <h2>WHO AM I</h2>  
      <div className='who-content'>
        <div className="who-img-wrap">
          <ImageSlider imageUrls={IMAGES} />

        </div>
        <div className="who-info-wrap">
          <ul>
            <li className="active">
              <p>Reader</p>
              세상의 다양한 지식에 대한 호기심이 많아 <span>저렴하고 검증된 자료를 바탕으로 작성된 책을 통해 지식을 습득</span>하길 좋아합니다(요즘은 뇌 과학 관련 서적에 관심이 갑니다).
            </li>
            <li >
              <p>TEA Enjoyer</p>
              커피를 마시지 않습니다. <span>대신 차(TEA)를 마십니다.</span> 요즘은 보이생차를 마시고 있습니다. 여름이 오니 우롱차가 마시고 싶어 집니다.
            </li>
            <li>
              <p>Health Manager</p>
              건강 관리를 위해 2년 전부터 <span>꾸준히 주에 2회 정도 헬스장</span>에 갑니다. 특히 허리와 엉덩히 근육과 스트레칭에 관심이 많습니다.
            </li>
          </ul>
          <p className="who-name">임수한</p>
          <p className="who-position">Front-end Developer</p>
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