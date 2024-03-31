import { useState, useEffect } from "react";
import { Outlet, Link, useNavigate, useLocation, useFetcher, NavLink } from "react-router-dom";
import { PAGE_LIST } from "../contents";
import { ReactComponent as Hamburger } from "../assets/hamburger.svg";

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
    console.log("isMobileView", isMobileView)
  },[isMobileView])

  useEffect(()=>{
    const handleScrollY = () =>{
      console.log("handleScrollY 작동중")
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
    console.log("작동")
  }

  const navLinkActive = ({isActive}) =>{
    return{
      fontWeight: isActive ? '600' : null,
      color : isActive ? '#6cbd82' : null
    }
  }
  return (
    <>
        <div className={`sidebar ${showSidebar ? 'sidebar-visible' : ''}`}>
        <div
        className={`logo `}
        onClick={()=>handleNavigate()}
        >
        <p>SOOHAN's</p>

        </div>

        <nav >
          <ul>
            {/* <li >
              <NavLink 
                style={navLinkActive}
              to={PAGE_LIST.WHO} >WHOAMI</NavLink>
            </li> */}
            <li >
              <NavLink 
              style={navLinkActive}
              to={PAGE_LIST.PROJECTS}>PROJECTS</NavLink>
            </li>
            <li >
              <NavLink 
              style={navLinkActive}
              to={PAGE_LIST.CONTACT}>CONTACT</NavLink>
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