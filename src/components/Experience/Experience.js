import React, { useEffect, useState } from "react";
import { ReactComponent as LinkedIn } from "../../assets/Linkedin.svg";
import { ReactComponent as Cancle } from "../../assets/cancle.svg";
import "./Experience.scss";

export const Expereince = () =>{
  const [ openFront, setOpenFront ] =useState(false);
  const [ openUIUX, setOpenUIUX ] = useState(false);

  const handleNewBlank = () =>{
    window.open('https://www.linkedin.com/in/sooohan/', "_blank", "noopener, noreferrer");
  }


  const handleFront= (e)=>{
    e.stopPropagation();
    setOpenFront(!openFront)
  }

  const handleUIUX= ()=>{

    setOpenUIUX(!openUIUX)
  }



  return (
    // 경험 영억
    <div className="experience-wrap">
      <h2>EXPERIENCE</h2>
      <div className="experience-left-right" >
              {/* 왼쪽 박스 */}
      <div className="experience-left">
        <ul>
          <li className="experience-left-total experience-left-each">
            <p>5.7 년<span>+</span></p>
            <p>(<span style={{fontWeight : 800}}>비 개발자</span> : 총 업무 경험)</p>
          </li>
          <li>
            <div className="experience-left-flex" >
              <div className="experience-left-each">
                <p>3 년</p>
                <p>(매니저 / 기획)</p>
              </div>

              <div className="experience-left-each">
                <p>11 개월</p>
                <p>(UIUX / 디자인)</p>
              </div>

            </div>
          </li>

          <li>
            <div className="experience-left-flex" >
              <div className="experience-left-each">
                <p>9 개월</p>
                <p>(홍보 / 사업기획)</p>
              </div>

              <div className="experience-left-each">
                <p>1년 <span>+</span></p>
                <p>(기타)</p>
              </div>

            </div>
          </li>
        </ul>
      </div>

      {/* 오른쪽 박스 */}
      <div className="experience-right">
        <div className="experience-right-top">
          <ul>
            <li onClick={(e)=>handleFront(e)}
            >
              <p>970 시간</p>
              <p>(프론트 엔드 교육)</p>
              <span className="experience-more">상세보기</span>

              <div className={`front-end ${openFront ? "visible" : "" }`}>
                <p><strong>프론트 엔드 교육 과정 </strong><span>(2023.09~2024.03)</span></p>
                <Cancle onClick={()=>setOpenFront(false)} />
                <div className="front-contents">

                <div>
                  <p>1. UI/UX Web 퍼블리싱 기초</p>
                  <p>HTML5, CSS 그리고 JS 기반으로 심미성, 사용성, 매체성 구성요소 설계 및 제작</p>
                </div>
                <div>
                  <p>2. 발표 :  프로젝트 1</p>
                  <p>HTML5, CSS 그리고 JS를 활용하여 정관장 레드스파크스 홈페이지 리뉴얼</p>
                </div>
                <div>
                  <p>3. SPA 이해</p>
                  <p>SPA : Vue.js/React.js를 사용한 SPA 개념 설명</p>
                  <p>프로젝트 구현 및 배포 : git/github를 사용한 배포</p>
                </div>
                <div>
                  <p>4. 발표 : 개인 프로젝트 2</p>
                  <p>React 기반 공공데이서를 활용한 서울시 지역구 도서 대출 확인 웹 서비스 제작</p>
                </div>
                <div>
                  <p>5. React Hooks 교육</p>
                  <p>React Hooks를 활용하여 firebase 연결 및 배포 학습</p>
                </div>
                <div>
                  <p>6. 발표 : 개인 프로젝트 3</p>
                  <p>Fetch 비동기를 활용하여 Client부터 Node 그리고 DB로 정보 통신</p>
                </div>
                </div>
              </div>
            </li>
            <li 
                onClick={handleUIUX}
            >
              <p>680 시간</p>
              <p>(UIUX 모바일 교육)</p>
              <span className="experience-more">상세보기</span>
              <div className={`uiux ${openUIUX ? "visible" : "" }`} >
                <p><strong>웹&모바일 UIUX 교육 과정 </strong><span>(2016.07~2016.11)</span></p>
                <Cancle onClick={()=>setOpenUIUX(false)} />
                <div className="uiux-contents">

                <div>
                  <p>1. UI UX 기획</p>
                  <p>1. UX 목표 수립 (UX Challenge) 2. UX 상황 분석 (Situation Analysis) 3. UX 필드 리서치 (Field Research) 4. 모델링(Modeling) 5. UX 전략 (UX Strategy)</p>
                </div>
                <div>
                  <p>2. UI UX 디자인</p>
                  <p>1. 서비스 아이데이션 (Service Ideation) 2. 서비스 디자인 (Service Design) 3. UI 디자인 (UI Design) 4. 프로토타이핑 (Prototyping)</p>
                </div>
                <div>
                  <p>3. UI UX 구현</p>
                  <p>1. UI 설계 검토 2. UI 구현 표준 수립 3. UI 제작 4. UI 테스트 5. UI 개선 및 보완</p>
                </div>
                <div>
                  <p>4. 발표 : 팀 프로젝트 1</p>
                  <p>가상현실 기반 얼굴 색조 화장, 립스틱, 속눈썹 확장 등을 가상으로 입혀주는 모바일 UI 제작</p>
                </div>
                
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="experience-right-bottom" >
          <span>SQLD 자격증 보유</span>
          <span>어학연수</span>
          <span>대학교국토대장정</span>
          <span>생활플라워디자인 대학생(우수상)</span>
        </div>
        
      </div>
      </div>


    </div>
  )
}