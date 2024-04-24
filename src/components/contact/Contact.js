import React, { useEffect } from "react";
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
              Github
            </span>
          </li>
          <li>
            <sapn
              className="contact-linkedin"
              onClick={() =>
                window.open("https://www.linkedin.com/in/sooohan/", "_blank")
              }
            >
              Linkedin
            </sapn>
          </li>
          <li>
            <span
              className="contact-blog"
              onClick={() =>
                window.open("https://life-explorer.tistory.com/", "_blank")
              }
            >
              Blog
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
