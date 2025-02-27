import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation, ScrollRestoration } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { AiFillProject } from "react-icons/ai";
import "./Root.scss";

export const Root = ({sections}) => {
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


  const handleNavLinkScrolling = (e, targetSectionId) => {
    e.preventDefault();
    console.log('Attempting to scroll...');
    
    if (sections && sections[targetSectionId] && sections[targetSectionId].current) {
      console.log('Element found, scrolling to:', sections[targetSectionId].current);
      try {
        sections[targetSectionId].current.scrollIntoView({ behavior: "smooth" });
        console.log('Scroll complete');
      } catch (error) {
        console.error('Scroll failed:', error);
      }
    }
  };

  if(!location.pathname.startsWith("/projects")) {
    return (
      <header>
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
              {/* <li 
                className="nav-item" >
                <Link to="#"><IoMdPerson /><span className="mobile">WHOAMI</span></Link>
              </li> */}
              <li
                // onClick={(e)=>handleNavLinkScrolling(e, 'projects')} 
                className="nav-item">
                <Link to="/projects"><AiFillProject /><span className="mobile" >PROJECTS</span></Link>
              </li>
            </ul>
  
          </nav>
        </div>
  
        <div  className="detail">
        <Outlet />
        <ScrollRestoration />
  
        </div>
      </header>
    );
  } else {
    return (
      <header> 
        <div className="project-header" >
        <div
          className={`logo `}
          onClick={()=>handleNavigate()}
          >
          <p>SOOHAN's</p>
  
          </div>

          <h3>
            Project Detail
          </h3>
        </div>


        <div  className="detail">
        <Outlet />
        <ScrollRestoration />

        </div>
      </header>
    );
  }
  

  
}