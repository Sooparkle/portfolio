import React, { useEffect } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";


import "./Contact.scss";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="contact-wrap">
        <h2>EXTRA ABOUT ME</h2>
        <ul>
          <li>
            <span
              className="contact-github"
              onClick={() =>
                window.open("https://github.com/Sooparkle/", "_blank")
              }
            >
              <FaGithubSquare /> Github
            </span>
          </li>
          <li>
            <span
              className="contact-linkedin"
              onClick={() =>
                window.open("https://www.linkedin.com/in/sooohan/", "_blank")
              }
            >
              <FaLinkedin /> LinkedIn
            </span>
          </li>
          <li>
            <span
              className="contact-blog"
              onClick={() =>
                window.open("https://life-explorer.tistory.com/", "_blank")
              }
            >
              <FaFilePen /> Personal Blog
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
