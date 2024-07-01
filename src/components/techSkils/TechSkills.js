import "./TechSkills.scss";

export const TechSkills = () =>{

  const contents = [
    { 
      title : 'HTML5',
      img : 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      texts : [
        "- 기본적인 DOM의 구조 이해 및 UI 제작 가능",
      ]
    },
    {
      title : 'CSS',
      img : "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      texts: [
        "- 웹과 모바일에 대한 기본적인 작동 원리 이해 및 작성 가능",
        "- YOUTUBE 'Kovin Powell'를 보면서 CSS 트랜드 학습",
      ],
    },
    {
      title : 'JS',
      img : "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      texts: [
        "- ES6 이후 기본 문법 구사 가능",
        "- Vanilla JavaScript의 기본 작동 원리 이해",
      ],
    },
    {
      title : 'React',
      img : "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      texts: [
        "- React 기본 Hooks, 이해 및 작성 가능",
        "- 비동기 처리에 대한 기본적 이해와 Fetch 통신과 에러 핸드링 가능",
      ],
    },
    {
      title : 'SACC',
      img : "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
      texts: [
        "- 컴파일을 활용한 CSS 대신 SCSS 가능"
      ],
    }
  ]


  const contents2 = [
    {
      title : 'Node',
      img : "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      texts: [
        "- CORS 이슈 해결을 위해 Server Node 활용",
        "- Fetch,axios 통한 통신(GET, POST) 구축 가능",
      ],
    },
    {
      title : 'TypeScript',
      img : "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
      texts: [
        "- 강의를 통해 기본 개념 숙지 및 학습",
        "- 변수에 타입 설정 및 type alias, interface 사용 가능",
      ],
    },
    {
      title : 'Git',
      img : "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      texts: [
        "- 사용 개념에 대한 이해 숙지",
        "- push를 기본으로 merge, rebase, squash 이해",
      ],
    },
    {
      title : 'CloudeFlare',
      img : "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg",
      texts: [
        "- GitHub 연결이 아닌 run build로 배포 경험 보유",
      ],
    }
  ]



  const toggleSection = (index) => {
    // setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return(
    <div className="tech-wrap" >
      <h2>TECH SKILLS</h2>
      <div className="tech-tip">
        <p>각각에 스킬을 클릭하시면 간략한 정보를 볼실 수 있어요.</p>
      </div>
      <div>
        <p className="tech-wrap-title">GOOD LEVEL</p>
        <ul>

          { 
          contents.map((skill, index)=>{
            return(
            <li 
              key={index} 
              className="tech-content" 
            >
              <img className={skill.title.toLowerCase()} src={skill.img} alt={skill.title} />
              <div className="tech-overlay">
              {
                  skill.texts.map((text, index)=>{
                    return(
                    <p key={index} >{text}</p>
                    )
                  })
                }
                </div>
            </li>
            )
          })
          }

        </ul>
      </div>

      <div>
        <p className="tech-wrap-title">UNDERSTAND LEVEL</p>
        <ul>

          { 
          contents2.map((skill, index)=>{
            return(
            <li 
              key={index} 
              className="tech-content" 
            >
              <img className={skill.title.toLowerCase()} src={skill.img} alt={skill.title} />
              <div className="tech-overlay">
              {
                  skill.texts.map((text, index)=>{
                    return(
                    <p key={index} >{text}</p>
                    )
                  })
                }
                </div>
            </li>
            )
          })
          }

        </ul>
      </div>

    </div>
  )
}