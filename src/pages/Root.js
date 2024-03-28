import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { PAGE_LIST } from "../contents";

export const Root = () => {
  const [ showSidebar, setShowSIdebar ] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setShowSIdebar(true);
      } else{
        setShowSIdebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return() =>{
      window.removeEventListener("scroll",handleScroll);
    }
  }, [showSidebar])

  return (
    <>
        <div className={`sidebar ${showSidebar ? 'visible' : ''}`}> 
        <h1>Contacts</h1>
        <div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={PAGE_LIST.MAIN} >HOME</Link>
            </li>
            <li>
              <Link to={PAGE_LIST.PROJECTS}>PROJECTS</Link>
            </li>
          </ul>
        </nav>
      </div>
  
      <div  className="detail">
      <Outlet />

      </div>
    </>
  );
}