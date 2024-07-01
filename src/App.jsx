import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Footer } from "./pages/Footer/Footer";
import { Intro } from "./components/intro/Intro";
import { Who } from "./components/who/Who";
import { Projects } from "./pages/projects/Projects";
import { TechSkills } from "./components/techSkils/TechSkills";
import { Contact } from "./components/contact/Contact";
import { Expereince } from "./components/Experience/Experience";
import './app.scss';



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
      { threshold: 0.2 } // Adjust threshold as needed
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);



  return (

    <>
      <section id="intro" ref={sections.intro} className="tag">
        <Intro />
        {/* <Slideword /> */}
      </section>

      <section id="whoami" ref={sections.whoami} className="who-tag">
        <Who />
      </section>

      <section id="tech" ref={sections.tech} className="tag">
        <TechSkills />
      </section>

      <section id="projects" ref={sections.projects} className="tag">
        <Projects />
      </section>

      {/* <section id="extra" ref={sections.extra} className="tag">
        <Contact />
      </section> */}

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
