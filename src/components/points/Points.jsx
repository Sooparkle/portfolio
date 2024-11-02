import { useEffect, useRef, useState } from 'react'
import './Points.scss'


const MainPoints = () =>{
  const pointArea = useRef(null);

  const [ isActivated, setIsActivated ] = useState(false);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          setIsActivated(entry.isIntersecting);
          observer.disconnect(pointArea.current)
        }
      },
      {
        threshold: 0.2
      }
    )

    if(pointArea.current){
      observer.observe(pointArea.current);
    }

    return () =>{
      if(pointArea.current){
        observer.disconnect(pointArea);
      }
    }

  },[pointArea])

  console.log("TESt", isActivated)

  return(
    <article
      ref={pointArea}
      className="points-container"
    >
      <ul>
        <li
          className={`point-list ${isActivated ? "points-activated1" : ""}`}
        >
          <p>
            <span
              className="points-svg"
            >
              <svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path fillRule="nonzero" d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 0 0-.301 1.575L6 16v.086a1.492 1.492 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.259-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path> </g> </g></svg>
            </span>
            <span
              className="points-title"
            >
            팀에 잘 녹아드는
            </span>
          </p>
          <div>
          여러 프로젝트를 수행하면서, <span className='text-bold'>팀원들이 저를 편안하게 느끼고 쉽게 다가오는 경험</span>을 많이 했습니다. 특히, 최근 진행했던 컨퍼런스 프로젝트에서는 웹 페이지 제작팀과 Discord에서 gif와 meme을 활용하여 소통함으로써 팀원들이 저를 더 빠르게 친숙하게 느낄 수 있었다는 피드백을 받았습니다. 저는 이러한 방식을 통해 팀에 자연스럽게 녹아들며, 보다 유연하고 친화적인 협업 문화를 만들어가는 데 강점을 가지고 있습니다.
          </div>
        </li>

        <li
        className={`point-list2 ${isActivated ? "points-activated2" : ""}`}
        >
          <p>
            <span
              className="points-svg"
            >
            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </span>
            <span
              className="points-title"
            >
              개발 역량 겸비한
            </span>
          </p>
          <div>
          SI 프로젝트 매니저로서 일하며 개발에 대한 흥미를 가지게 됐습니다. <span className='text-bold' > 1년 동안 직접 아이디어를 구현하여 실제로 개발해 보면서 작동하는 것을 보는 과정</span>에서 큰 보람을 느꼈습니다. 이 경험은 단순히 그림으로 그려진 개념을 넘어, 실제로 구현되는 과정을 이해하게 해주었고, 이를 통해 개발자와 사용자 간의 간극을 더 명확히 인식하게 되었습니다. 저는 이러한 경험을 바탕으로 개발과 사용자 요구를 균형 있게 이해하고, 협업을 이끌어낼 수 있습니다.
          </div>
        </li>

        <li
        className={`point-list3 ${isActivated ? "points-activated3" : ""}`}
        >
          <p>
            <span
              className="points-svg"
            >
              <svg width="64px" height="64px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>schedule_line</title> <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Business" transform="translate(-864.000000, 0.000000)" fillRule="nonzero"> <g id="schedule_line" transform="translate(864.000000, 0.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero"> </path> <path d="M16,3 C16.5523,3 17,3.44772 17,4 L17,4 L17,5 L19,5 C20.1046,5 21,5.89543 21,7 L21,7 L21,19 C21,20.1046 20.1046,21 19,21 L19,21 L5,21 C3.89543,21 3,20.1046 3,19 L3,19 L3,7 C3,5.89543 3.89543,5 5,5 L5,5 L7,5 L7,4 C7,3.44772 7.44771,3 8,3 C8.55229,3 9,3.44772 9,4 L9,4 L9,5 L15,5 L15,4 C15,3.44772 15.4477,3 16,3 Z M19,7 L5,7 L5,19 L19,19 L19,7 Z M14.8241,9.37872 C15.2146,8.9882 15.8478,8.9882 16.2383,9.37872 C16.6289,9.76924 16.6289,10.4024 16.2383,10.7929 L16.2383,10.7929 L11.2957,15.7356 C10.9012,16.13 10.2617,16.13 9.86731,15.7356 L9.86731,15.7356 L7.75306,13.6214 C7.36253,13.2308 7.36253,12.5977 7.75306,12.2071 C8.14358,11.8166 8.77675,11.8166 9.16727,12.2071 L9.16727,12.2071 L10.5815,13.6214 Z" id="形状结合" fill="#000000"> </path> </g> </g> </g> </g></svg>
            </span>
            <span
              className="points-title"
            >
              일정을 준수하는
            </span>
          </p>
          <div>
          저는 <span className='text-bold' >일정 준수를 중요한 업무 역량</span>으로 여깁니다. 결과물이 일정에 맞추어 준비되면, 필요 시 추가 논의를 통해 퀄리티를 높이거나 새로운 방향성을 모색할 수 있습니다. 반대로, 일정을 지키지 않는 것은 문제를 숨기고 키울 가능성이 크며, 프로젝트의 리스크로 작용할 수 있습니다. 저는 일정 준수를 통해 프로젝트의 문제점을 미리 파악하고, 빠르게 대책을 마련하여 프로젝트의 원활한 진행을 돕고자 합니다.
          </div>
        </li>
      </ul>
    </article>
  )

}

export default MainPoints