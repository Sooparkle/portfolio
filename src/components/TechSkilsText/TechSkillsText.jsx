import React, { useEffect, useRef, useState } from 'react'
import './TechSkillsText.scss'

const BetterList = [
  'HTML5',
  'CSS',
  'JavaScript',
  'React js',
];

const GoodList = [
  'Next js',
  'TypeScript',
  'Node js',
  'git',
  'Supabase(PostgreSQL)',
];

const Libraries = [
  'Tan Stack query',
  'Zustand',
  'Chart js',
  'react-router-dom',
  'react-calender',
];

const TechSkillsText = () => {
  const TechSkillsArea = useRef(null);
  const [ isIntersectionObs, setIsinersectionObs ] = useState(false);


  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) setIsinersectionObs(entry.isIntersecting)
      },
    {
      threshold: [.2, 0.4]
    }
  )

  if(TechSkillsArea.current) observer.observe(TechSkillsArea.current);

  return () =>{
    if(TechSkillsArea.current){
      observer.disconnect(TechSkillsArea.current)
    }
  }
  },[TechSkillsArea])

  return (
    <div
      className='techskills-container'
    >
      <h2>
        TECH SKILLS
      </h2>

      <div
        ref={TechSkillsArea}
        className='techskills-text-better-container'
      >
        <p
          className={`better-list ${isIntersectionObs ? "activated" : ""}`}
        >
          {
            BetterList.map((item, index) =>(
              <span
                key={index}
              >
                {item}
              </span>
            ))
          }
        </p>
        <p
          className={`good-list ${isIntersectionObs ? "activated" : ""}`}
        >
          {
            GoodList.map((item, index) =>(
              <span
                key={index}
              >
                {item}
              </span>
            ))
          }
        </p>
        <p
          className={`libraries ${isIntersectionObs ? "activated" : ""}`}
        >
          {
            Libraries.map((item, index) =>(
              <span
                key={index}
              >
                {item}
              </span>
            ))
          }
        </p>
      </div>


    </div>
  )
}

export default TechSkillsText