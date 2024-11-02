import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Footer } from "./pages/Footer/Footer";
import { Intro } from "./components/intro/Intro";
import { Who } from "./components/who/Who";
import { Projects } from "./pages/projects/Projects";
import { TechSkills } from "./components/techSkils/TechSkills";
import { Expereince } from "./components/Experience/Experience";
import './app.scss';
import TechSkillsText from "./components/TechSkilsText/TechSkillsText";
import { Slideword } from "./components/Slideword/Sildeword";



function App() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = {
    intro: useRef(null),
    whoami: useRef(null),
    exper: useRef(null),
    tech: useRef(null),
    projects : useRef(null),
    extra: useRef(null),
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const sectionRef = sections[entry.target.id];
          // console.log("SectionRef", sectionRef);
          if(sectionRef && sectionRef.current){
            if (entry.isIntersecting) {
              sectionRef.current.classList.add('visible');
              observer.unobserve(entry.target);
            } 
          }

        }),
      { threshold: 0.2 }
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);


  const sectionRef = useRef(null)
  useEffect(()=>{
    const section = sections.tech.current;
    let scrollPosition = 0;

    const handleScroll = () => {
      const scrollDelta = window.scrollY - scrollPosition;
      scrollPosition = window.scrollY

      if(section){
        section.scrollLeft =+ scrollDelta;
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[])




  return (

    <>
      <section id="intro" ref={sections.intro} className="tag">
        <Intro />
      </section>


      <section id="tech" ref={sections.tech} className="tag">
        {/* <TechSkills /> */}
        <TechSkillsText />
      </section>



      <section id="projects" ref={sections.projects} className="tag">
        <Projects />
      </section>

      <Slideword />
      
      <section id="whoami" ref={sections.whoami} className="who-tag">
        <Who />
      </section>


      <section id="exper" ref={sections.exper} className="tag">
        <Expereince />
      </section>


      <section >
        <Footer />
      </section>
    </>

  );
}

export default App;
