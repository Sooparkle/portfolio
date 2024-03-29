import { Footer } from "../pages/Footer"


export const Contact =()=>{
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return(
    <>
      <div className="contact-wrap">
        <h2>CONTACT ME</h2>
        <dl>
          <dt>Email</dt>
          <dd>imsoohanmu@gmail.com</dd>
        </dl>
        <dl>
          <dt>Github</dt>
          <dd>https://github.com/Sooparkle/</dd>
        </dl>
        <dl>
          <dt>LinkedIn</dt>
          <dd>https://www.linkedin.com/in/sooohan/</dd>
        </dl>
        <dl>
          <dt>Blog</dt>
          <dd>https://life-explorer.tistory.com/</dd>
        </dl>
      </div>
    </>
  )
}