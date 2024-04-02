export const TechSkills = () =>{

  const contents = [
    { 
      title : 'HTML5',
      img : 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      texts : [
        "기본적인 DOM의 구조 이해 및 UI 제작 가능",
      ]
    },
    {
      title : 'CSS',
      img : "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      texts: [
        "웹과 모바일에 대한 기본적인 작동 원리 이해 및 작성 가능",
        "YOUTUBE Kovin Powell를 보면서 CSS 트렌스 학습",
      ],
    },
    {
      title : 'JS',
      img : "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      texts: [
        "ES6 이후 기본 문법 구사 가능",
        "Vanilla JavaScript의 작동 원리 이해 추구",
      ],
    },
    {
      title : 'React',
      img : "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      texts: [
        "React 기본 Hooks르 이해 및 작성 가능",
        "비동기 처리에 대한 기본적 이해와 Fetch 통신 가능",
        "Redux와 Reduxjs/toolkit 활용한 상태관리 가능",
      ],
    },
    {
      title : 'Node',
      img : "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      texts: [
        "express를 활용한 기초적인 통신(GET, POST) 가능"
      ],
    }
  ]


    // const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    // setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return(
    <div className="tech-wrap" >
      <h2>TECH SKILLS</h2>
      <ul>

        { 
        contents.map((skill, index)=>{
          return(
          <li 
            key={index} 
            className="tech-content" 
          >
            <img className={skill.title.toLowerCase()} src={skill.img} alt={skill.title} />
            {
                skill.texts.map((text)=>{
                  return(
                  <p>{text}</p>
                  )
                })
              }
          </li>
          )
        })
      }
        
      </ul>
    </div>
  )
}