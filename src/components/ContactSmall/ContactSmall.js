import React, { useEffect } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";


import "./ContactSmall.scss";

export const ContactSmall = () => {
  

  return (
      <section className="contactSmall-wrap">
        <ul>
          <li>
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
          </li>
        </ul>
      </section>

  );
};
