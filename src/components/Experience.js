import { ReactComponent as LinkedIn } from "../assets/Linkedin.svg";

export const Expereince = () =>{


  const handleNewBlank = () =>{
    window.open('https://www.linkedin.com/in/sooohan/', "_blank", "noopener, noreferrer");
  }
  return (
    // 경험 영억
    <div className="experience-wrap">
      <h2>Experince</h2>
      <div >
              {/* 왼쪽 박스 */}
      <div className="experience-left">
        <ul>
          <li className="experience-left-total experience-left-each">
            <p>5.7 년<span>+</span></p>
            <p>(총 업무 경험)</p>
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
            <li>
              <p>970 시간</p>
              <p>(프론트 엔드 교육)</p>
            </li>
            <li>
              <p>680 시간</p>
              <p>(UIUX 모바일 교육)</p>
            </li>
          </ul>
        </div>
        <div className="experience-right-bottom" >
          <span>SQLD 자격증 보유</span>
          <span>어학연수 유</span>
          <span>생활플라워디자인 대학생부 (우수상)</span>
          <span>대졸</span>
        </div>
        
      </div>
      </div>

            <p 
              className="experience-left-linkedin"
              onClick={()=>handleNewBlank()}> <LinkedIn /></p>
    </div>
  )
}