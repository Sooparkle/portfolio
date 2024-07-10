import React, { useState, useEffect, useRef } from "react";
import { Outlet, Link, useNavigate, useLocation, useFetcher, NavLink } from "react-router-dom";
import { PAGE_LIST } from "../../contents";
import { IoMdPerson } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import { RiInformationFill } from "react-icons/ri";

import "./Root.scss";

export const Root = () => {
  const [ showSidebar, setShowSIdebar ] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <775);
  const [ isMobileSizeSmall, setIsMobileSizeSmall ] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  // useEffect(()=>{
  //   const handleResize = () =>{
  //     if(window.innerWidth <775){
  //       setIsMobileSizeSmall(true)
  //     }
  //     else{
  //       setIsMobileSizeSmall(false)
  //     }

  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize)
  // }, [])



  useEffect(()=>{
    const handleScrollY = () =>{
      const scrollThreshold = 800;
        if (window.scrollY > scrollThreshold) {
          setShowSIdebar(false);
        } else{
          setShowSIdebar(true);
      }
    };

    window.addEventListener("scroll", handleScrollY);

    return() =>{
      window.removeEventListener("scroll",handleScrollY);
    }
  }, [showSidebar, location.pathname])


  const handleNavigate = () =>{
    navigate("/", {replace :true})
  }

  const navLinkActive = ({isActive}) =>{
    return{
      fontWeight: isActive ? '600' : null,
      color : isActive ? '#6cbd82' : null
    }
  }


  const handleNavLinkScrolling = (e, targetSectionId) =>{
    e.preventDefault();
    const targetSection = document.getElementById(targetSectionId);
    targetSection.scrollIntoView({behavior:"smooth"});
  }
  return (
    <>
        <div className={`sidebar ${showSidebar ? "disappear" : ""}`}>
        {/* <div className={`sidebar ${showSidebar ? 'sidebar-visible' : ''}`}> */}
        <div
        className={`logo `}
        onClick={()=>handleNavigate()}
        >
        <p>SOOHAN's</p>

        </div>

        <nav >
          <ul>
            <li 
              onClick={(e)=>handleNavLinkScrolling(e, 'whoami')}
              className="nav-item" >
              <Link to="#"><IoMdPerson /><span className="mobile">WHOAMI</span></Link>
            </li>
            <li
              onClick={(e)=>handleNavLinkScrolling(e, 'projects')} 
              className="nav-item">
              <Link to="#"><AiFillProject /><span className="mobile" >PROJECTS</span></Link>
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