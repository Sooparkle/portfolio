import React, { useEffect, useRef, useState } from "react";
import "./Project.scss";
import TiltCard from "../../components/TiltCard/TiltCard";
import useProjectStore from "../../components/utility/useProjectStore";


export const Projects = () => {
  const [ popupdot, togglePopupdot ] = useState(null);
  const projects = useProjectStore(state => state.projects);
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
          {projects?.map(item => (
            <TiltCard key={item.name}  project={item}/>
          )
          )}
          </div>
      </div>
    </div>
  );
};
