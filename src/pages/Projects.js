import  React, {useEffect} from "react";
import SoeulLocal from "../assets/Book.svg";
import fetchAccom from "../assets/AccommodationFetch.png";
import redSparks from "../assets/VolleryBall.svg";
import accommodationImage from "../assets/Sleep.svg";

export const Projects = () =>{

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const projects = [
    {
      title: 'Project 1',
      isAble :true,
      name : '배구, 정관장 레드스파크스 리뉴얼',
      description: '팀 프로젝트로(팀장 역할 수행), 정관장 레스 스파크스 홈페이지 리뉴얼',
      contribution : "40%",
      imageUrl: `${redSparks}`,
      url : `http://sooparkle.dothome.co.kr/`,
      github : "https://github.com/theshack8/kgc_team_project",
      keywords : ['MPA','Vanilla JS', 'HTML5','CSS', 'PPT 및 기획', '담당메뉴:STATS & TICKET']
    },
    {
      title: 'Project 2',
      isAble :true,
      name : "서울시 지역구 독서 베스트 대출 목록 확인 사이트",
      description: '서울시 도서관 공공 API를 활용하여 구별 도서 베스트 대출 목록 확인 사이트 기획',
      contribution : "100%",

      imageUrl: `${SoeulLocal}`,
      url : 'https://library-62r.pages.dev',
      github : 'https://github.com/Sooparkle/Library/tree/renewerlibrary',
      gitServer : 'https://github.com/Sooparkle/pj3_server/tree/main',
      keywords : ['SPA','react-router-dom', 'react-redux',`react-reduxjs/toolkit`, 'react-datepicker', '공공데이터 API' ]
    },
    {
      title: 'Project 3',
      isAble :true,
      name : "숙박 예약 사이트, 좀쉼쉼",
      description: 'Client부터 DB까지 직접 설계하여 Fetch 활용한 숙박 사이트 기획',
      contribution : "100%",
      imageUrl: `${accommodationImage}`,
      url : `https://project3-accom.pages.dev/`,
      github : 'https://github.com/Sooparkle/project3/tree/home',
      gitServer : 'https://github.com/Sooparkle/pj3_server/tree/main',
      keywords : ['SPA','react-router-dom', 'react-redux', `react-reduxjs/\ntoolkit`, 'react-calendar',`Supabse(PostgreSQL)`]
    },
  ];

  const handleOpenDemo = (project) => {
    console.log("project", project)
      if (project.isAble === true) {
        window.open(project.url, "_blank", "noopener, noreferrer");
        return;
      } else {
        window.alert(`현재 유지보스 중입니다.\n빠른 시일내로 처리하겠습니다.`);
      }
  };

  const handleOpenGithub = (project) => {
    console.log("project", project)
      if (project.isAble === true) {
        window.open(project.github, "_blank", "noopener, noreferrer");
        return;
      } else {
        window.alert(`현재 유지보스 중입니다.\n빠른 시일내로 처리하겠습니다.`);
      }
  };

  const handleOpenServer = (project) => {
    console.log("project", project)
      if (project.isAble === true) {
        window.open(project.gitServer, "_blank", "noopener, noreferrer");
        return;
      } else {
        window.alert(`현재 유지보스 중입니다.\n빠른 시일내로 처리하겠습니다.`);
      }
  };

  return(
    <>
      <div className="project-wrap container">
      <h2>PROJECTS <span>(현재 총 : {projects.length} 개)</span></h2>
        <div className="project-each-wrap">
          {
            projects?.map((item,index)=>{
              return(
                <div 
                key={index}
                className="project-each">
                    <img src={item.imageUrl} alt={item.description} />
                  <div className="project-info">
                    <p>{item.name}</p>
                    <p>기여도 : {item.contribution}</p>
                    <p>{item.description}</p>
                    <ul className="project-keywords">
                      { item.keywords.map((library) => 
                        <li key={library} > {library}</li>
                        )}

                    </ul>
                    <div className="project-icon-wrap">
                      <button onClick={()=>handleOpenGithub(item)} >Github</button>
                      <button onClick={()=>handleOpenDemo(item)}>Live Demo</button>
                      <button onClick={()=>handleOpenServer(item)}
                      >Github Sever</button>
                    </div>

                  </div>
                </div>
                )
            })
          }
        </div>
      </div>
    </>
  )
} 