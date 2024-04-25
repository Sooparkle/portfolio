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

  useEffect(()=>{
    const handleResize = () =>{
      if(window.innerWidth <775){
        setIsMobileSizeSmall(true)
      }
      else{
        setIsMobileSizeSmall(false)
      }

    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize)
  }, [])



  useEffect(()=>{
    const handleScrollY = () =>{
      const url = location.pathname;
      const scrollThreshold =null;
      if(url === "/"){
        const scrollThreshold = 560;
        if (window.scrollY > scrollThreshold) {
          setShowSIdebar(true);
        } else{
          setShowSIdebar(false);
        }
      }
      else {
        const scrollThreshold = -10;
        if (window.scrollY > scrollThreshold) {
          setShowSIdebar(true);
        } else{
          setShowSIdebar(false);
        }
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


  const hnadleNavLinkScrolling = (e, targetSectionId) =>{
    e.preventDefault();
    const targetSection = document.getElementById(targetSectionId);
    targetSection.scrollIntoView({behavior:"smooth"});
  }
  return (
    <>
        <div className={`sidebar `}>
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
              onClick={(e)=>hnadleNavLinkScrolling(e, 'whoami')}
              className="nav-item" >
              <Link to="#"><IoMdPerson /><span className="mobile">WHOAMI</span></Link>
            </li>
            <li
              onClick={(e)=>hnadleNavLinkScrolling(e, 'projects')} 
              className="nav-item">
              <Link to="#"><AiFillProject /><span className="mobile" >PROJECTS</span></Link>
            </li>
            <li
              onClick={(e)=>hnadleNavLinkScrolling(e, 'extra')} 
              className="nav-item">
              <Link to="#"><RiInformationFill /><span className="mobile">EXTRAME</span></Link>
            </li>
          </ul>

        </nav>
      </div>

      {/* <div className={`bamhurger-wrap ${isMobileSizeSmall ? 'bamburger-visiable' : 'bamburger-wrap'}`}>
        <ul>
        <li>
            <NavLink to={PAGE_LIST.WHO} >WHOAMI</NavLink>
          </li>
          <li>
            <NavLink to={PAGE_LIST.PROJECTS}>PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to={PAGE_LIST.CONTACT}>CONTACT</NavLink>
          </li>
          <li>
              <Hamburger
                onClick={()=>handleRightSideBar()}
                className={`${isMobileSizeSmall ? 'bamburger-btn' : 'bamburger-btn-unvisiable'}`}
                  />

            </li>
        </ul>
      </div>
   */}
      <div  className="detail">
      <Outlet />

      </div>
    </>
  );
}