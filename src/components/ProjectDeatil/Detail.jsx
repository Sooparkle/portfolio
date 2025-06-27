import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Detail.scss'
import useProjectStore from '../utility/useProjectStore'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Footer } from '../../pages/Footer/Footer';


const Detail =  () => {
  

  const projects = useProjectStore(state => state.projects);
  const navigate = useNavigate();
  const location = useLocation();
  const projectSectionRefs = useRef({})
  const [ isLoading, setIsLoading ] = useState(false);

  // if(!isLoading){
  //   return(
  //     <div>
  //       <h1>Loaidng</h1>
  //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae veritatis excepturi debitis minima quae sunt, odit autem officia, corrupti ullam, necessitatibus dicta perferendis deserunt minus vero neque corporis fuga.</p>
  //     </div>
  //   )
  // }


  useEffect(() => {
    const hash = location.hash;
    
    if (hash) {
      // Add a delay of 1.5 seconds (1500ms) before scrolling
      const timer = setTimeout(() => {
        setIsLoading(true)
        const element = projectSectionRefs.current[hash.substring(1)];
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }, 700); 
      
      // Cleanup function to clear the timeout if component unmounts or effect re-runs
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleIdMovement = useCallback((id) => {
    const elementId = id.replace(" ", "");
    const element = projectSectionRefs.current[elementId]; 

    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    } else {
        window.alert("문제가 발생하여 이동할 수 없습니다.")
    }
}, []); 

  const renderingProjectContent = (project) => {
    switch (project.title) {
      case 'Project 5':
        return(
          <section 
            className='project-item-container'
            key={project.title}
            id={project.title.replace(" ", "")}
            ref={ref => projectSectionRefs.current[project.title.replace(" ", "")] = ref} // ref, projectSectionRefs 에 DOM 할당
            >
            <div className='project-item-header' >
              <h2>{project.name}</h2>
              <p>{project.type} / {project.contribution} </p>
            </div>
            {project.contents.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            <ul className="project-keywords" role='list'>
              {project.keywords.map((library,index) => (
                <li key={index}> {library}</li>
              ))}
            </ul>

            <div className='project-live-container' >
              <Link className='project-live' to={project.url} target='_blank'>시연해보기</Link>
              {
                project.popup && project.popup.map((item,index)=>{
                  const [key, value] = Object.entries(item)[0]
                  return(
                    <Link key={index} className='project-live' to={value} target='_blank'>{key}</Link>
                  )
                })
              }
            </div>
            <div className='project-item-inner-container' >
              <h3>직면한 문제</h3>
              <dl>
                <dt>1. 가독성을 위한 MarkDown</dt>
                <dd>과제 :출력되는 가독성과 가시성이 떨어지는 텍스트 문제</dd>
                <dd>
                    {/* 문제 해결 : <br />
                    처음에는 서로 시간이 맞지 않아서 먼저 테스트해보기 위해 ngrok 프록시를 통해 우회 시도. 하지만 ngrok 데이터를 모두 사용하여 결국 날짜를 정하고 서버에서 제 IP 주소를 허용 */}
                </dd>
                <dd>npm library를 통해서 쉽고 빠르게 처리하여 사람들에게 전달하고자 하는 메시지 전달력 강화</dd>
                <figure>
                  <img
                      src='/markdown.png'
                      alt='Markdown 처리.'
                  />
                  <figcaption>CORS 에러 해결 과정 이미지</figcaption>
                </figure>
                {/* <dd>결과 : 토스 결제 테스트 가능</dd> */}
              </dl>

              <dl>
                <dt>2. 무료 API 제한에 대한 전략</dt>
                <dd>과제 : 만약 무료 Token 할당량이 다 떨어지면 어떻게 할 것인가?</dd>
                {/* <dd>
                  문제 해결 : <br />
                  loading 페이지를 추가하여 결제를 완료하면 loading 페이지로 이동시키고 setTimeout API를 활용해 시간차를 두고 데이터가 온전히 할당. 토스 데이터 유/무에 따라서 성공과 실패 페이지로 이동
                </dd> */}
                <dd>전체 답변 처리를 다 못하지만 FAQ와 연동하여 간단한 질문에 유사 의미 파악 후 답변(유사도 기반)</dd>
                <figure >
                  <img 
                    src='/serviceflow.png'
                    alt='페이먼트 대기 화면'
                  />
                  <figcaption>페이먼트 대기 화면 이미지</figcaption>
                </figure>
                {/* <dd>결과 : 데이터 안전성 확보 및 사용자 경험 향상</dd> */}
              </dl>

            </div>
          </section>
        );

        return(
          <section 
            className='project-item-container'
            key={project.title}
            id={project.title.replace(" ", "")}
            ref={ref => projectSectionRefs.current[project.title.replace(" ", "")] = ref} // ref, projectSectionRefs 에 DOM 할당
            >
            <div className='project-item-header' >
              <h2>{project.name}</h2>
              <p>{project.type} / {project.contribution} </p>
            </div>
            {project.contents.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            <ul className="project-keywords" role='list'>
              {project.keywords.map((library,index) => (
                <li key={index}> {library}</li>
              ))}
            </ul>

            <div className='project-live-container' >
              <Link className='project-live' to={project.url} target='_blank'>읽어보기</Link>
              {
                project.popup && project.popup.map((item,index)=>{
                  const [key, value] = Object.entries(item)[0]
                  return(
                    <Link key={index} className='project-live' to={value} target='_blank'>{key}</Link>
                  )
                })
              }
            </div>
            <div className='project-item-inner-container' >
              <h3>직면한 문제</h3>
              <dl>
                <dt>1. 결제 테스트, CORS</dt>
                <dd>과제 : 로컬 환경에서 결제 테스트 시 브라우저 Same-Origin Policy에 의하여 막힘 발생</dd>
                <dd>
                    {/* 문제 해결 : <br />
                    처음에는 서로 시간이 맞지 않아서 먼저 테스트해보기 위해 ngrok 프록시를 통해 우회 시도. 하지만 ngrok 데이터를 모두 사용하여 결국 날짜를 정하고 서버에서 제 IP 주소를 허용 */}
                </dd>
                <dd>토스 결제 시스템 연동 중 CORS 문제 발생, 먼저 ngrok를 활용하여 팀과의 개발 가능 시간 차이를 해소하고 서버 연동 후 문제 해결</dd>
                <figure>
                  <img
                      src='/pudding_CORS.png'
                      alt='페이먼트 대기 화면'
                  />
                  <figcaption>CORS 에러 해결 과정 이미지</figcaption>
                </figure>
                {/* <dd>결과 : 토스 결제 테스트 가능</dd> */}
              </dl>

              <dl>
                <dt>2. 결제 시, 데이터 연결 시간차</dt>
                <dd>과제 : 토스에서 전달하는 데이터 불완전성 (데이터 연결 시간 지연)</dd>
                {/* <dd>
                  문제 해결 : <br />
                  loading 페이지를 추가하여 결제를 완료하면 loading 페이지로 이동시키고 setTimeout API를 활용해 시간차를 두고 데이터가 온전히 할당. 토스 데이터 유/무에 따라서 성공과 실패 페이지로 이동
                </dd> */}
                <dd>결제 완료 후 웹 서버에서 프론트엔드로 데이터 전송 시 시간 지연 발생, 사용자 지루함 해소 및 안정적인 프로세스 경험을 위해 3 ball bounce 로딩 애니메이션 대기 화면 추가</dd>
                <figure >
                  <img 
                    src='/payment_bouncing.png'
                    alt='페이먼트 대기 화면'
                  />
                  <figcaption>페이먼트 대기 화면 이미지</figcaption>
                </figure>
                {/* <dd>결과 : 데이터 안전성 확보 및 사용자 경험 향상</dd> */}
              </dl>

              <dl>
                <dt>3. 결제 페이지 UI 선정</dt>
                <dd>과제 : 결제 시 토스 UI를 어떤 방식으로 구현할 것인가</dd>
                {/* <dd>
                    문제 해결 :<br />
                    기술적인 문제보다는 사용자의 취향과 사용성이 중요하다고 판단. 하단 UI로 구현할 수도 있지만 화면 공간 제약으로 인해 POPUP UI를 선택하고 position:fixed 속성을 사용하여 제자리에서 결제 UI를 출력 설정
                </dd> */}
                <dd>결제 UI는 다양한 기기 호환성 및 사용자 경험 유지를 위해 팝업 형태로 구현</dd>
                <figure>
                  <img
                      src='/tosspayment_UI.png'
                      alt='페이먼트 페이 결제 ui'
                    />
                    <figcaption>페이먼트 페이 결제 UI 이미지</figcaption>
                    </figure>
                {/* <dd>결과 : 디바이스 화면 의존도 감소</dd> */}
              </dl>

              <dl>
                <dt>4. 신청 페이지 직업 선택 Dropdown 리스트</dt>
                <dd>
                    과제 : 선택 영역 (직업 선택), 디자인 컨셉에 맞는 Dropdown 리스트 구현 필요
                </dd>
                {/* <dd>
                    문제 해결 :<br />
                    &lt;div&gt;와 &lt;p&gt; 태그를 활용하여 디자인을 적용하고, Tab과 Enter 키 작동을 위해 tabIndex 속성을 활용하여 탭 버튼 기능을 설정. 또한 onKeyDown 이벤트 핸들러를 활용해 엔터 키로 선택이 가능하도록 구현.
                </dd> */}
                <dd>&lt;form&gt;에서 &lt;select&gt;를 대신하여 &lt;div&gt;를 사용해 UI 디자인 컨셉을 구현하고, 시맨틱 웹과 사용 편의성 모두 고려하여 제작</dd>
                <figure>
                  <img
                      src='/pudding_dropdown.png'
                      alt='신청 페이지 직업선택 dropdown ui'
                  />
                  <figcaption>dropdown UI 이미지</figcaption>
                </figure>
                {/* <dd>
                    결과 : 디자인 컨셉 충족 및 사용성 문제 해결
                </dd> */}
              </dl>

              <dl>
                <dt>5. Default 탭 이외 정보 값 공유 </dt>
                <dd>
                    과제 : 기본 탭 외 다른 정보 값 출력 및 공유 기능 필요
                </dd>
                {/* <dd>
                    문제 해결 :<br />
                    각 탭의 정보를 문자열로 연결하여 URL 파라미터로 구성, 공유 기능을 구현
                </dd> */}
                <dd>정보 공유 편의성 향상을 위해 기본 탭 외 다른 탭을 URL로 직접 접근 가능하도록 탭 별 URL 설정 기능 구현</dd>
                <figure>
                  
                <img
                    src='/pudding_URL.png'
                    alt='tab 데이터별 url 설정'
                    />
                  <figcaption>Tab 별 URL 설정 이미지</figcaption>
                </figure>
                {/* <dd>
                    결과 : 정보 공유 및 사용성 향상
                </dd> */}
              </dl>

            </div>
          </section>
        );
      case 'Project 4':
        return(
          <section 
            className='project-item-container'
            key={project.title}
            id={project.title.replace(" ", "")}
            ref={ref => projectSectionRefs.current[project.title.replace(" ", "")] = ref} // ref, projectSectionRefs 에 DOM 할당
            >
            <div className='project-item-header' >
              <h2>{project.name}</h2>
              <p>{project.type} / {project.contribution} </p>
            </div>
            {project.contents.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            <ul className="project-keywords" role='list'>
              {project.keywords.map((library,index) => (
                <li key={index}> {library}</li>
              ))}
            </ul>

            <div className='project-live-container' >
              <Link className='project-live' to={project.url} target='_blank'>읽어보기</Link>
              {
                project.popup && project.popup.map((item,index)=>{
                  const [key, value] = Object.entries(item)[0]
                  return(
                    <Link key={index} className='project-live' to={value} target='_blank'>{key}</Link>
                  )
                })
              }
            </div>
            <div className='project-item-inner-container' >
              <h3>직면한 문제</h3>
              <dl>
                <dt>1. 결제 테스트, CORS</dt>
                <dd>과제 : 로컬 환경에서 결제 테스트 시 브라우저 Same-Origin Policy에 의하여 막힘 발생</dd>
                <dd>
                    {/* 문제 해결 : <br />
                    처음에는 서로 시간이 맞지 않아서 먼저 테스트해보기 위해 ngrok 프록시를 통해 우회 시도. 하지만 ngrok 데이터를 모두 사용하여 결국 날짜를 정하고 서버에서 제 IP 주소를 허용 */}
                </dd>
                <dd>토스 결제 시스템 연동 중 CORS 문제 발생, 먼저 ngrok를 활용하여 팀과의 개발 가능 시간 차이를 해소하고 서버 연동 후 문제 해결</dd>
                <figure>
                  <img
                      src='/pudding_CORS.png'
                      alt='페이먼트 대기 화면'
                  />
                  <figcaption>CORS 에러 해결 과정 이미지</figcaption>
                </figure>
                {/* <dd>결과 : 토스 결제 테스트 가능</dd> */}
              </dl>

              <dl>
                <dt>2. 결제 시, 데이터 연결 시간차</dt>
                <dd>과제 : 토스에서 전달하는 데이터 불완전성 (데이터 연결 시간 지연)</dd>
                {/* <dd>
                  문제 해결 : <br />
                  loading 페이지를 추가하여 결제를 완료하면 loading 페이지로 이동시키고 setTimeout API를 활용해 시간차를 두고 데이터가 온전히 할당. 토스 데이터 유/무에 따라서 성공과 실패 페이지로 이동
                </dd> */}
                <dd>결제 완료 후 웹 서버에서 프론트엔드로 데이터 전송 시 시간 지연 발생, 사용자 지루함 해소 및 안정적인 프로세스 경험을 위해 3 ball bounce 로딩 애니메이션 대기 화면 추가</dd>
                <figure >
                  <img 
                    src='/payment_bouncing.png'
                    alt='페이먼트 대기 화면'
                  />
                  <figcaption>페이먼트 대기 화면 이미지</figcaption>
                </figure>
                {/* <dd>결과 : 데이터 안전성 확보 및 사용자 경험 향상</dd> */}
              </dl>

              <dl>
                <dt>3. 결제 페이지 UI 선정</dt>
                <dd>과제 : 결제 시 토스 UI를 어떤 방식으로 구현할 것인가</dd>
                {/* <dd>
                    문제 해결 :<br />
                    기술적인 문제보다는 사용자의 취향과 사용성이 중요하다고 판단. 하단 UI로 구현할 수도 있지만 화면 공간 제약으로 인해 POPUP UI를 선택하고 position:fixed 속성을 사용하여 제자리에서 결제 UI를 출력 설정
                </dd> */}
                <dd>결제 UI는 다양한 기기 호환성 및 사용자 경험 유지를 위해 팝업 형태로 구현</dd>
                <figure>
                  <img
                      src='/tosspayment_UI.png'
                      alt='페이먼트 페이 결제 ui'
                    />
                    <figcaption>페이먼트 페이 결제 UI 이미지</figcaption>
                    </figure>
                {/* <dd>결과 : 디바이스 화면 의존도 감소</dd> */}
              </dl>

              <dl>
                <dt>4. 신청 페이지 직업 선택 Dropdown 리스트</dt>
                <dd>
                    과제 : 선택 영역 (직업 선택), 디자인 컨셉에 맞는 Dropdown 리스트 구현 필요
                </dd>
                {/* <dd>
                    문제 해결 :<br />
                    &lt;div&gt;와 &lt;p&gt; 태그를 활용하여 디자인을 적용하고, Tab과 Enter 키 작동을 위해 tabIndex 속성을 활용하여 탭 버튼 기능을 설정. 또한 onKeyDown 이벤트 핸들러를 활용해 엔터 키로 선택이 가능하도록 구현.
                </dd> */}
                <dd>&lt;form&gt;에서 &lt;select&gt;를 대신하여 &lt;div&gt;를 사용해 UI 디자인 컨셉을 구현하고, 시맨틱 웹과 사용 편의성 모두 고려하여 제작</dd>
                <figure>
                  <img
                      src='/pudding_dropdown.png'
                      alt='신청 페이지 직업선택 dropdown ui'
                  />
                  <figcaption>dropdown UI 이미지</figcaption>
                </figure>
                {/* <dd>
                    결과 : 디자인 컨셉 충족 및 사용성 문제 해결
                </dd> */}
              </dl>

              <dl>
                <dt>5. Default 탭 이외 정보 값 공유 </dt>
                <dd>
                    과제 : 기본 탭 외 다른 정보 값 출력 및 공유 기능 필요
                </dd>
                {/* <dd>
                    문제 해결 :<br />
                    각 탭의 정보를 문자열로 연결하여 URL 파라미터로 구성, 공유 기능을 구현
                </dd> */}
                <dd>정보 공유 편의성 향상을 위해 기본 탭 외 다른 탭을 URL로 직접 접근 가능하도록 탭 별 URL 설정 기능 구현</dd>
                <figure>
                  
                <img
                    src='/pudding_URL.png'
                    alt='tab 데이터별 url 설정'
                    />
                  <figcaption>Tab 별 URL 설정 이미지</figcaption>
                </figure>
                {/* <dd>
                    결과 : 정보 공유 및 사용성 향상
                </dd> */}
              </dl>

            </div>
          </section>
        );

        case 'Project 3':
          return(
            <section 
              className='project-item-container'
              key={project.title}
              ref={ref => projectSectionRefs.current[project.title.replace(" ", "")] = ref} // ref 설정
            >
            <div className='project-item-header' >
              <h2>{project.name}</h2>
              <p>{project.type} / {project.contribution} </p>
            </div>
            {project.contents.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            <ul className="project-keywords">
              {project.keywords.map((library,index) => (
                <li key={index}> {library}</li>
              ))}
            </ul>

            <div className='project-live-container' >
            <Link className='project-live' to={project.url} target='_blank'>시연해보기</Link>
              {
                project.popup && project.popup.map((item,index)=>{
                  const [key, value] = Object.entries(item)[0]
                  return(
                    <Link key={index} className='project-live' to={value} target='_blank'>{key}</Link>
                  )
                })
              }
            </div>
            <div className='project-item-inner-container' >
              <h3>직면한 문제</h3>

              <dl>
                <dt>1. DB를 한번도 설계해본 경험이 없어</dt>
                <dd>과제 : DB 세팅</dd>
                {/* <dd>
                    문제 해결 : <br />
                    Supabase를 통해 DB를 설계하기 위해 생활코딩 강의부터 4개 이상의 YouTube 영상을 참고하며 독학. DB 설계 시 AI의 도움을 받았으며, Supabase API를 통해 연동.
                </dd> */}
                <dd>빠르고 간편하게 DB를 구축하고자 Supabase를 활용하여 DB 환경 구성</dd>
                <figure>

                <img
                  src='/supabase_DB.png'
                  alt='좀쉼쉼 DB table'
                  />
                  <figcaption>좀쉼쉼 DB 테이블 이미지</figcaption>
                  </figure>
                {/* <dd>결과 : Supabase를 통해 DB 세팅 완료. user, accommodation, reservation 3개의 테이블을 중심으로 서비스 작동</dd> */}
              </dl>

              <dl>
                <dt>2. React &gt; Next.js 프레임워크 변경</dt>
                <dd>
                    과제1 : SSR (Server Side Rendering)에 대한 이해 및 적용<br />
                    과제2 : 숙소 정보 추가로 인한 가시성 및 가독성 높은 UI 구현
                </dd>
                {/* <dd>
                    문제 해결 : <br />
                    과제1 : SSR은 서버에서 렌더링하여 클라이언트로 전달하는 시스템. Next.js의 주요 특징 중 하나는 서버 컴포넌트와 클라이언트 컴포넌트를 혼용하여 구성할 수 있다는 점 활용하여 전체 구조를 SSR로 설정하고, 필요에 따라 부분적으로 `'use client'` 를 사용하여 홈페이지 성능 최적화를 조절.<br />
                    과제2 : 검증된 네이버 파이낸셜 UI를 참고하여 사용자에게 일관된 경험을 제공하고자 유사한 UI 및 명도 대비를 조정하여 가독성과 시인성을 높임. 또한, 모서리를 둥글게 처리하여 시각적인 편안함을 추구.
                </dd> */}
                <dd>Next.js의 SSR을 활용한 성능 최적화는 물론, 편리한 라우터 기능, 로딩 및 에러 처리 등 다양한 기능을 통해 개발 생산성 향상. 검증된 네이버 파이낸셜 UI를 참고하여 가독성과 시인성 향상</dd>
                <figure>

                <img
                    src='/accom_UI.png'
                    alt='mypage와 숙소 예약 페이지 ui'
                    />
                  <figcaption>Mypag, 숙소 예약 페이지 UI 이미지</figcaption>
                </figure>
                {/* <dd>
                    결과1 : 기존 React 환경보다 로딩 속도 향상 (Chrome Lighthouse Web Performance 78 &gt; 85 증가)<br />
                    결과2 : 전체적으로 일관된 디자인 톤을 유지하며 시각적 편안함 제공
                </dd> */}
              </dl>

              <dl>
                <dt>3. 공지사항 페이지 (페이지 게시판 vs 무한 스크롤)</dt>
                <dd>과제 : 공지사항 페이지에 적합한 UI 방식 선정</dd>
                {/* <dd>
                    문제 해결 :<br />
                    공지사항은 중요한 정보를 기록하는 공간이므로, 데이터의 정확한 검색이 중요하다고 판단. 페이지네이션은 페이지 위치를 통해 정보 파악이 용이하고 데이터 전송량을 조절할 수 있다는 장점. 반면, 무한 스크롤 방식은 휘발성이 강한 이벤트 페이지에 더 적합하다고 판단.
                </dd> */}
                <dd>공지사항 및 이벤트 페이지는 페이지별 목적에 맞춰 게시판 형태를 선택하여 구현</dd>
                <figure>

                <img
                    src='/boarding.png'
                    alt='이벤트 페이지와 공지사항 페이지 ui'
                    />
                    <figcaption>이벤트 페이지, 공지사항 페이지 UI 이미지</figcaption>
                    </figure>
                {/* <dd>결과 : 공지사항 페이지는 정확한 정보 검색에 용이, 이벤트 페이지는 빠른 정보 확인에 용이</dd> */}
              </dl>
            </div>

          </section>
          )


        case 'Project 2':
          return(
            <section 
              className='project-item-container'
              key={project.title}
              ref={ref => projectSectionRefs.current[project.title.replace(" ", "")] = ref} // ref 설정
            >
            <div className='project-item-header' >
              <h2>{project.name}</h2>
              <p>{project.type} / {project.contribution} </p>
            </div>

            {project.contents.map((item, index) => (
              <p key={index}>{item}</p>
            ))}

            <ul className="project-keywords">
              {project.keywords.map((library,index) => (
                <li key={index}> {library}</li>
              ))}
            </ul>

            <div className='project-live-container' >
            <Link className='project-live' to={project.url} target='_blank'>시연해보기</Link>
              {
                project.popup && project.popup.map((item,index)=>{
                  const [key, value] = Object.entries(item)[0]
                  return(
                    <Link key={index} className='project-live' to={value} target='_blank'>{key}</Link>
                  )
                })
              }
            </div>
            <div className='project-item-inner-container' >
              <h3>직면한 문제</h3>

              <dl>
                <dt>1. Fetch data 리셋 현상</dt>
                <dd>과제 : 결과 목록 페이지에서 상세 페이지로 이동 시, fetch 데이터 리셋 문제 발생</dd>
                {/* <dd>
                    문제 해결 : <br />
                    TanStack Query Library의 자동 캐시 기능을 활용하여 fetch 데이터 리셋 문제 해결
                </dd> */}
                <dd>컴포넌트 리셋으로 인한 데이터 Fetch 문제 발생, 상태 관리 라이브러리 TanStack Query의 데이터 캐싱 기능을 활용하여 해결</dd>
                <figure>

                <img
                  src='/tanstackquery.png'
                  alt='TanStack Query 라이브러리'
                  />
                  <figcaption>TanStack Query 라이브러리 이미지</figcaption>
                  </figure>
                {/* <dd>결과 :  페이지 이동 시 데이터 리셋 없이 정보 유지</dd> */}
              </dl>

              <dl>
                <dt>2. 도서 이미지 통일성 확보</dt>
                <dd>과제 : 국립중앙도서관 API 제공 이미지 데이터의 불일치 및 품질 편차 문제</dd>
                {/* <dd>
                    문제 해결 : <br />
                    TanStack Query로 가져온 데이터를 props로 전달하고, 결과 목록 컴포넌트에서 데이터를 렌더링할 때 도서 ISBN 정보를 활용하여 카카오 API를 통해 도서 이미지를 가져오도록 구현
                </dd> */}
                <dd>UI 통일성 확보를 위해 카카오톡 API의 이미지 리소스 활용
                </dd>
                <figure>

                <img
                    src='/library_UI.png'
                    alt='도서 검색 결과 UI - 이미지 통일성 개선'
                    />
                    <figcaption>도서 검색 결과 UI 이미지</figcaption>
                    </figure>
                {/* <dd>결과 : 도서 이미지 품질 및 통일성 확보</dd> */}
              </dl>

            </div>

            </section>
          )
    }
  }



  return (
    <>
    <main className="project-detail">
      <div className="project-content-top" > 
        <h1>프로젝트 진행하며 직면한 문제</h1>
        <p>각각의 프로젝트를 진행하면서 직면했던 문제들을 어떻게 해결했는지 상세하게 풀이해보다.</p>
      </div>


      <div className='project-content-bottom' >
      
        <aside className="project-aside">

          <button 
            className='project-back-btn-pc'
            onClick={() => navigate(-1)}
            aria-label='이전 페이지로 돌아가기'
          >
            <IoMdArrowRoundBack /> 뒤로가기
          </button>


          <nav className='project-aside-nav' >
            <ul role='list'>
              {
                projects.map(project =>(
                  <li 
                    key={project.title}
                  >
                    <a
                    href={`#${project.title.replace(" ", "")}`}
                    onClick={(event) => {
                      event.preventDefault(); // 링크 이동 방지
                      handleIdMovement(project.title);
                    }}
                  >
                    {project.name}
                  </a>
                    </li>
                ))
              }

            </ul>
          </nav>

        </aside>
        

        {/* right content area */}
        <article
          className='project-content'
        >
          <section>
            {
              projects.map(project => renderingProjectContent(project))
            }
          </section>

        </article>
      </div>

      {/* back button for mobile view */}
      <button
        className='project-back-btn'
        onClick={() => navigate(-1)}
        aria-label='이전 페이지로 돌아가기'
      >
        뒤로가기
      </button>
    </main>
    <Footer />
    </>
  )
}

export default Detail