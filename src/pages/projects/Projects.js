import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as Cancel } from "../../assets/cancle.svg";
import redSparks from "../../assets/red_sparks.png";
import persona from "../../assets/persona.png";
import positionmap from "../../assets/positionmap.png";
import playerRecord from "../../assets/playerrecord.png";
import ticket from "../../assets/ticket.png";
import SoeulLocal from "../../assets/local20240331.png";
import whybook from "../../assets/whybook.png"
import howbook from "../../assets/howbook.png"
import whobook from "../../assets/whobook.png"
import bookstacks from "../../assets/bookStacks.png"
import accommodationImage from "../../assets/JejuAccomm.png";
import order from "../../assets/order.png";
import accomStacks from "../../assets/accomstacks.png";
import accomLibraries from "../../assets/accomLibraries.png";
import "./Project.scss";
import { PopupList } from "./Popup";
import { HiOutlineDotsVertical } from "react-icons/hi";

export const Projects = () => {
  const [openProject1, setOpentProject1] = useState(false);
  const [openProject2, setOpentProject2] = useState(false);
  const [openProject3, setOpentProject3] = useState(false);
  const [ popupdot, togglePopupdot ] = useState(null);


  const projects = [
    {
      title: "Project 1",
      isAble: true,
      type : "팀",
      name: "배구, 정관장 레드스파크스 리뉴얼",
      description:
        "팀장 역할 수행하며, 페르소나와 포지셔닝 맵 등을 활용하여 UIUX 리뉴얼 진행",
      contribution: "40%",
      imageUrl: [`${redSparks}`],
      url: `http://sooparkle.dothome.co.kr/`,
      github: "https://github.com/theshack8/kgc_team_project",
      keywords: [
        "MPA",
        "Vanilla JS",
        "PPT 및 기획",
        "담당메뉴:STATS & TICKET",
      ],
      popup:[
        {git :  "https://github.com/theshack8/kgc_team_project"},
      
      ]
    },
    {
      title: "Project 2",
      isAble: true,
      type : "개인",
      name: "서울시 지역구 독서 베스트 대출",
      description:
        "서울시 도서관 공공 API를 활용하여 지역구별 도서 베스트 대출 목록 통신",
      contribution: "100%",

      imageUrl: [`${SoeulLocal}`],
      url: "https://library-62r.pages.dev",
      github: "https://github.com/Sooparkle/Library/tree/renewerlibrary",
      gitServer: "https://github.com/Sooparkle/pj3_server/tree/main",
      keywords: [
        "TypeScript",
        "react-router-dom",
        "react-query",
        "react-datepicker",
        "공공데이터 API",
      ],
      popup:[
        {git : "https://github.com/Sooparkle/Library/tree/renewerlibrary"},
        {blog : "https://life-explorer.tistory.com/category/Projects"},
      ]
    },
    {
      title: "Project 3",
      isAble: true,
      type : "개인",
      name: "숙박 예약 사이트, 좀쉼쉼",
      description:
        "Client,Server 그리고 DB까지 직접 설계하여, Fetch 활용한 사이트 구축",
      contribution: "100%",
      imageUrl: [`${accommodationImage}`],
      url: `https://project3-accom.pages.dev/`,
      github: "https://github.com/Sooparkle/project3/tree/home",
      gitServer: "https://github.com/Sooparkle/pj3_server/tree/main",
      keywords: [
        "react-router-dom",
        "react-redux",
        `react-reduxjs/\ntoolkit`,
        "react-calendar",
        `Supabse(PostgreSQL)`,
      ],
      popup:[
        {git : "https://github.com/Sooparkle/project3/tree/home"},
        {blog : "https://life-explorer.tistory.com/category/Projects"},
      ]
    },
    // {
    //   title: "Project 4",
    //   isAble: true,
    //   type : "개인",
    //   name: "Timer로 Todo 관리",
    //   description:
    //     "TypeScript를 이용하여 Browser LocalStorage에 데이터 관리",
    //   contribution: "100%",
    //   imageUrl: [`${timerTodo}`],
    //   url: `https://timer-todo.pages.dev/`,
    //   github: "https://github.com/Sooparkle/timer_todo/",
    //   keywords: [
    //     "TypeScript",
    //     "LocalStorage",
    //     "react-icons",
    //   ],
    // }
  ];

  const handleOpenDemo = (project) => {
    if (project.isAble === true) {
      window.open(project.url, "_blank", "noopener, noreferrer");
      return;
    } else {
      window.alert(`현재 유지보스 중입니다.\n빠른 시일내로 처리하겠습니다.`);
    }
  };

  const handleOpenGithub = (project) => {
    console.log("project", project);
    if (project.isAble === true) {
      window.open(project.github, "_blank", "noopener, noreferrer");
      return;
    } else {
      window.alert(`현재 유지보스 중입니다.\n빠른 시일내로 처리하겠습니다.`);
    }
  };

  const handleOpenServer = (project) => {
    console.log("project", project.gitServer);
    if (project.gitServer) {
      window.open(project.gitServer, "_blank", "noopener, noreferrer");
      return;
    } else {
      window.alert(`서버가 없는 프로젝트 입니다.`);
    }
  };



const togglePopup =(index) => {
  if(index === 0){
    setOpentProject1(!openProject1)
    return
  }
  if(index === 1){

    setOpentProject2(!openProject2)
    return
  }
  if(index === 2){

    setOpentProject3(!openProject3)
    return
  }
  else{
    window.alert(`간단한 프로젝트입니다.\n LiveDemo를 통해 직접 체험해 보세요!`)
  }
}



// popupdot cancel button
useEffect(()=>{
  const close = () => togglePopupdot(null)
  if(popupdot >-1){
    window.addEventListener('click', close)
  }
  return () =>{
    window.removeEventListener('click', close)
  }
},[popupdot])

// popupdot it check
const handleToggle = (id,e) =>{
  e.stopPropagation();
  togglePopupdot(prev => (prev === id ? null : id))
}

  return (
    <div className="project">
      <div className="project-wrap">
        <h2>
          PROJECTS
        </h2>
        <div className="project-each-wrap">
          {projects?.map((item, index) => {
            return (
              <div key={index} className="project-each">
                <div className="project-p">
                  <img className="project-p-img" src={item.imageUrl[0]} alt="" />
                  <p className="project-attribution">{item.contribution} <span>({item.type})</span></p>
                </div>
                <div className="project-info">
                  <p className="first"> {item.name}</p>

                  <p>{item.description}</p>
                  <ul className="project-keywords">
                    {item.keywords.map((library) => (
                      <li key={library}> {library}</li>
                    ))}
                  </ul>

                  {/* <button 
                    onClick={()=>togglePopup(index)}
                  >
                    과정 상세보기
                  </button> */}

                <div className="project-icon-wrap">
                  {/* <button onClick={() => handleOpenGithub(item)}>
                    Github
                  </button> */}

                  <button 
                    className="project-live"
                    onClick={() => handleOpenDemo(item)}>
                    Live Demo
                  </button>

                  <button
                    className="project-popupdot"
                    onClick={(e) => handleToggle(index, e)}
                  >
                    <HiOutlineDotsVertical />
                    {popupdot === index && <PopupList 
                      item={item} 
                      // closed={()=>togglePopupdot(false)} 
                      handleToggle={handleToggle}
                      // current={popupdot===index}
                    />}
                  </button>

                </div>

                </div>
              </div>
            );
          })}
        </div>

          {/* popup area */}
        <div
          className={`project-popup1 ${openProject1 ? "visible" : ""}`}
        >
          <p>
            <strong>Project1(팀) : 리뉴얼 방향성 및 UIUX</strong>
            <Cancel onClick={()=>setOpentProject1(false)} />
          </p>
          <div className="popup-project1">
            <div>
              <p>PPT 디자인 방향서 분석</p>
              <img src={persona} alt="persona" />
              <img src={positionmap} alt="persona" />
              
              <p>
                - 페스로나, 포지셔닝, 톤앤매너
              </p>
            </div>
            <div>
              <p>BEFROE & AFTER : ticket</p>
              <img src={ticket} alt="persona" />              
              <p>
                - 경기장 'HOME & AWAY' 구분
              </p>
              <p>
                - HOME & AWAY에 따른 다른 정보값 사전에 색상으로 구분
              </p>
            </div>

            <div>
              <p>BEFROE & AFTER : playerRecord</p>
              <img src={playerRecord} alt="persona" />
              
              <p>
                - 남자부, 여자부 선택 영역 확대, 검색 영역 색상 구분 및 상세 조건 영역 추가
              </p>
              <p>
                - 표 구분 영역과 결과 영역을 새로 정렬 하여 가독성 중점 콘텐츠 작성
              </p>
              <button onClick={()=>window.open("https://docs.google.com/presentation/d/1ndZvu6W7nJ9yxKJrZF7RVBUGlJVHyLS7icEllIa7-XY/edit?usp=sharing", "_blank")}>
                PPT 상세보기
              </button>
              <button
              onClick={()=>setOpentProject1(false)}
              >닫기</button>
            </div>
          </div>
        </div>

        {/* project2 popup  */}
        <div
          className={`project-popup2 ${openProject2 ? "visible" : ""}`}
        >
          <p>
            <strong>Project2(개인) : 도서관 API </strong>
            <Cancel onClick={()=>setOpentProject2(false)} />
          </p>
          <div className="popup-project2">
            <div>
              <img src={whybook} alt="why" />
              <p>왜 책인가?</p>
              <p>
                - 전 회사가 도서관 홈페이지 관리 업체라 도서쪽 배경 지식의 이점 활용
              </p>
              <p>
              - 성인 문해력 심화

              </p>
            </div>
            <div>
              <img src={howbook} alt="how" />
              <img src={whobook} alt="target" />

              <p>지역 대출 도서를 선택한 이유?, 어떤 대상인가?</p>
              <p>
                - 당근의 하이퍼로컬 진출, 하이퍼로컬이란 ‘아주 좁은 범위의 특정 지역에 맞춘’ 전략
              </p>
              <p>
                - 대상, 지역 생활권 활동하는 '학부모' + '50 plus 어르신'
              </p>
              <p>
                - 책 읽기는 모든 학습의 기초 체력 방향성 시사
              </p>
            </div>
            <div>
              <img src={bookstacks} alt="tech stacks" />
              <p>Tech Stacks</p>
              <p>
                - HTML5 + CSS + JS + React with Github
              </p>
            </div>
            <div>
              <p>React-Router-Dom</p>
              <p>
                - 상세 페이지 이동, useNavigate Hook 사용
              </p>
              <p>
                - useNavigate의 state 활용하여 데이서 재사용
              </p>
            </div>
            <div>
              <p>React-Datepicker</p>
              <p>
                - 2개의 Datapicker를 활용하여 시작일과 종료일 설정 
              </p>
              <p>
                - POST 방식으로 node에서 통신(node를 처리한 이유는 CORS 이슈 처리)
              </p>
            </div>
            <div>
            <button onClick={()=>window.open("https://docs.google.com/presentation/d/1EDLgsa5C0gUm0vAPXyOkXXidjDJ1kSwUmXckX7GExx0/edit#slide=id.g2b641e31f55_0_0", "_blank")}>
                PPT 상세보기
              </button>
              <button
              onClick={()=>setOpentProject2(false)}
              >닫기</button>

            </div>
          </div>
        </div>

        {/* project3 popup  */}
        <div
          className={`project-popup3 ${openProject3 ? "visible" : ""}`}
        >
          <p>
            <strong>Project3(개인) : Fetch 통신</strong>
            <Cancel onClick={()=>setOpentProject3(false)} />
          </p>
          <div className="popup-project3">
            <div>
              <img src={order} alt="accommodation fetch order" />
              <p>Clinet : Midle : DB</p>
              <p>
                - 실제 업무에서 API 사용 방향성과 유사하게 MVP 제작
              </p>
            </div>
            <div>
              <img src={accomStacks} alt="accommodation tech stacks" />

              <p>사용한 언어</p>
              <p>
                - Client : React, JS, HTML5, CSS
              </p>
              <p>- Middle : node</p>
              <p>- DB : PostgreSQL via Supabase</p>
            </div>

            <div>
              <img src={accomLibraries} alt="libraries" />

              <p>사용한 라이브러리</p>
              <p>
                - React-Router-Dom : 페이지 이동 및 state로 데이터 제사용
              </p>
              <p>- React-calendar : 숙박 일자 선택 활용</p>
              <p>- Redux + Redexjs/Toolkit : 로그인 완료시 DB로부터 전달 받은 데이터 전역 활용</p>
            </div>
            <div>

            <button onClick={()=>window.open("https://docs.google.com/presentation/d/1vCJxg1QCKyfzmqRQGtM2XN4xgMsKbNcqwOQpodcfBpc/edit?usp=sharing", "_blank")}>
              PPT 상세보기
            </button>
            <button
              onClick={()=>setOpentProject3(false)}
              >닫기</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};
