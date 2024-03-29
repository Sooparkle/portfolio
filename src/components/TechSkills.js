export const TechSkills = () =>{

  return(
    <div className="tech-wrap" >
      <h2>TECH SKILLS</h2>
      <ul>
        <li>
          <img className='html5' src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' alt="HTML5" />
          <p>기본적인 DOM의 구조 이해 및 UI 제작 가능</p>
        </li>
        <li>
          <img className='css' src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' alt="CSS" />
          <p>웹과 모바일에 대한 기본적인 작동 원리 이해 및 작성 가능</p>
          <p>YOUTUBE kovin Powell를 보면서 CSS 트렌스 학습</p>
        </li>
        <li>
          <img className='js' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' alt="javascript" />
          <p>ES6 이후 기본 문법 구사 가능</p>
          <p>Jquery 보단 Vanilla JS 추구</p>
        </li>
        <li>
          <img className='react' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="react" />
          <p>React 기본 Hooks르 이해 및 작성 가능</p>
          <p>비동기 처리에 대한 기본적 이해와 Fetch 통신 추구</p>
          <p>Redux와 Reduxjs/toolkit 활용한 전역 변수 가능</p>
        </li>
        <li>
          <img className='node' src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' alt="nodejs" />
          <p>express를 활용한 기초적인 통신 가능</p>
        </li>
      </ul>
    </div>
  )
}