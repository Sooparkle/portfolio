import React, { useEffect } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";


import "./ContactSmall.scss";

export const ContactSmall = () => {
  
  const linkInfo = [
    {className : "contact-github", url : "https://github.com/Sooparkle/", icon : <FaGithubSquare /> },
    {className : "contact-blog", url : "https://life-explorer.tistory.com/", icon : <FaFilePen /> },
    // {className : "contact-linkedin", url : "https://www.linkedin.com/in/sooohan/", icon :<FaLinkedin /> },

  ]

  return (
      <section className="contactSmall-wrap">
        <ul>

          {
            linkInfo.map(({className, url, icon}) => (
              <li key={className}>
                <span 
                  className={className}
                  onClick={()=> window.open(url, "_blank")}
                >
                  {icon}
                </span>
              </li>
            ))
          }
          {/* <li>
            <span
              className="contact-github"
              onClick={() =>
                window.open("https://github.com/Sooparkle/", "_blank")
              }
            >
              <FaGithubSquare />
            </span>
          </li>
          <li>
            <span
              className="contact-linkedin"
              onClick={() =>
                window.open("https://www.linkedin.com/in/sooohan/", "_blank")
              }
            >
              <FaLinkedin />
            </span>
          </li>
          <li>
            <span
              className="contact-blog"
              onClick={() =>
                window.open("https://life-explorer.tistory.com/", "_blank")
              }
            >
              <FaFilePen /> 
            </span>
          </li> */}
        </ul>
      </section>

  );
};
