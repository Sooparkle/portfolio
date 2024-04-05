import React, { useEffect } from 'react';


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
          <dd 
          className='contact-github'
          onClick={()=>window.open("https://github.com/Sooparkle/", "_blank")}>https://github.com/Sooparkle/</dd>
        </dl>
        <dl>
          <dt>LinkedIn</dt>
          <dd
          className='contact-linkedin'
          onClick={()=>window.open("https://www.linkedin.com/in/sooohan/", "_blank")}
          >https://www.linkedin.com/in/sooohan/</dd>
        </dl>
        <dl>
          <dt>Blog</dt>
          <dd 
          className='contact-blog'
          onClick={()=>window.open("https://life-explorer.tistory.com/", "_blank")}>https://life-explorer.tistory.com/</dd>
        </dl>
      </div>
    </>
  )
}