import React, { useEffect, useState } from "react";
import redSparks from "../../assets/red_sparks.png";
import SoeulLocal from "../../assets/local20240331.png";
import accommodationImage from "../../assets/JejuAccomm.png";
import "./Project.scss";
import { PopupList } from "./Popup";
import { HiOutlineDotsVertical } from "react-icons/hi";

export const Projects = () => {
  const [ popupdot, togglePopupdot ] = useState(null);


  const projects = [
    {
      title: "Project 3",
      isAble: true,
      type : "개인",
      name: "숙박 사이트, '좀쉼쉼'",
      description:
        "DB 설계 및 DB User Table 활용, 로그인 인증 가능 숙박 사이트",
      contribution: "100%",
      imageUrl: [`${accommodationImage}`],
      url: `https://edf3d9c6.next-type-accommodation.pages.dev`,
      github: "https://github.com/Sooparkle/project3/tree/home",
      gitServer: "https://github.com/Sooparkle/pj3_server/tree/main",
      contents:[
        "교육과정 프로젝트로, 'Client - Server - DB' 통신",
        "직접 만든 Supabase DB로 검색, 예약 그리고 예약 확인까지 가능",
        "STAR",
      ],
      star : 
      [
        {Situation : "사용자에게 더 편리한 경험 선사[React => Next]"},
        {Task : "1)Image, Link bundler 최적화 2) UI 가독성 3) 더 많은 정보 제공"},
        {Action : "1) Next 14 사용법 숙지 및 실행 2) Naver 파이넨셜팀 UI 적용 3) 타 숙박업소 밴처마킹"},
        {Result : "1) 더 많은 정보 취득 가능 2) Lighthouse, Peformance 78 to 85 증가"},
      ],
      keywords: [
        "Next 14",
        "Zustand",
        "react-calendar",
        `Supabse(PostgreSQL)`,
      ],
      popup:[
        {git : "https://github.com/Sooparkle/project3/tree/home"},
        {blog : "https://life-explorer.tistory.com/category/Projects"},
      ]
    },
    {
      title: "Project 2",
      isAble: true,
      type : "개인",
      name: "서울시 지역구 독서 베스트 대출",
      description:
        "공공 API를 활용하여, 서울특별시 지역구별 도서 베스트 대출 목록 통신",
      contribution: "100%",

      imageUrl: [`${SoeulLocal}`],
      url: "https://library-62r.pages.dev",
      github: "https://github.com/Sooparkle/next-accom",
      gitServer: "https://github.com/Sooparkle/pj3_server/tree/main",
      contents:[
        "교육과정 프로젝트로, '문해력'이라는 사회적 이슈 + '도서' 활용 해결 제안",
        "서울시 특정 지역구, 특정 기간 동안 가장 관심있는 도서 검색 가능",
        "STAR",
      ],
      star : 
      [
        {Situation : "상세 페이지 조회 이후 검색 결과 목록 페이지로 이동시 데이터 사라짐"},
        {Task : "검색 결과 목록 조회 페이지 데이터 유지"},
        {Action : "TanStack Query Library 사용(캐쉬 저장 방식)"},
        {Result : "데이터 그대로 존재 + 번외) 검색 결과 내 검색 속도 향상"},
      ],
      keywords: [
        "TypeScript",
        "react-router-dom",
        "TanStack Query",
        "ChartJS",
        "react-datepicker",
        "공공데이터 API",
        "Zustand",
      ],
      popup:[
        {git : "https://github.com/Sooparkle/Library/tree/renewerlibrary"},
        {blog : "https://life-explorer.tistory.com/category/Projects"},
      ]
    },
    {
      title: "Project 1",
      isAble: true,
      type : "팀",
      name: "배구, 정관장 레드스파크스 리뉴얼",
      description:
        "배구, 정관장레드스파크 홈페이지를 클론(clone) 코딩",
      contribution: "40%",
      imageUrl: [`${redSparks}`],
      url: `http://sooparkle.dothome.co.kr/`,
      github: "https://github.com/theshack8/kgc_team_project",
      contents:[
        "교육과정 프로젝트로, Javascript를 학습하기 위한 '팀' 프로젝트",
        "팀장 역할 수행, 페르소나와 포지셔닝 맵 등을 활용하여 UIUX 리뉴얼",
        "STAR",
      ],
      star : 
      [
        {Situation : "UX 개선 방향성 미정"},
        {Task : "주요 고객층 파악"},
        {Action : "1) SWOT 분석 2) 경쟁사 분석 3) 페르소나 분석"},
        {Result : "1) 티켓팅 시 HOME/AWAY 명확히 표기 2) 선수 SNS 접근 가능 확보 및 개인 채널 홍보"},
      ],
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

// popupdot ID check in order to only one popup displayed
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

                  
                  
{/* 
                  <ul className="contents">
                    <li className="description">{item.description}</li>
                    {
                      item.contents.map( (i, index )=> (
                        
                        <li key={index}>{index+1}. {i}</li>
                      ))
                    }
                  </ul> */}

                  <dl className="contents">
                    <dt className="description">{item.description}</dt>
                    {
                      item.contents.map( (i, index )=> (
                        
                        <dd key={index}>{index+1}. {i}</dd>
                      ))
                    }
                    {
                      item.star.map((i, index) => (
                        Object.entries(i).map(([key, value]) => (
                          <dd className="contents-star" key={index}><strong>{key}</strong> : {value}</dd>
                        ))
                      ))
                    }
                  </dl>


                  <ul className="project-keywords">
                    {item.keywords.map((library,index) => (
                      <li key={index}> {library}</li>
                    ))}
                  </ul>

                {/* project buttons area */}
                <div className="project-icon-wrap">
                  <button 
                    className="project-live"
                    onClick={() => handleOpenDemo(item)}>
                    Live Demo
                  </button>

                  {/* popupdot area */}
                  <button
                    className="project-popupdot"
                    onClick={(e) => handleToggle(index, e)}
                  >
                    <HiOutlineDotsVertical />
                    {popupdot === index && <PopupList 
                      item={item} 
                      handleToggle={handleToggle}
                    />}
                  </button>
                </div>

                </div>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
};
