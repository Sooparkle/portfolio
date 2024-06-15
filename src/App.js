import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Footer } from "./pages/projects/Footer/Footer";
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





  // const introRef = useRef(null);
  // const [isIntroVisible, setIntroIsVisible] = useState(false);
  // const slideRef = useRef(null);
  // const [isSlideVisible, setSlideVisible] = useState(false);
  // const whoRef = useRef(null);
  // const [isWhoVisible, setWhoIsVisible] = useState(false);
  // const experRef = useRef(null);
  // const [isExperVisible, setExperIsVisible] = useState(false);
  // const proRef = useRef(null);
  // const [isProVisible, setProIsVisible] = useState(false);
  // const techRef = useRef(null);
  // const [isTechVisible, setTechIsVisible] = useState(false);
  // const contactRef = useRef(null);
  // const [isContactVisible, setContactIsVisible] = useState(false);




  // const handleIntersection = (entries) => {
  //   entries.forEach((entry)=>{
  //     if (entry.target === introRef.current){
  //       setIntroIsVisible(entry.isIntersecting)
  //     } 
  //     else if(entry.target === whoRef.current){
  //       setWhoIsVisible(entry.isIntersecting)
  //     } 
  //     else if(entry.target === experRef.current){
  //       setExperIsVisible(entry.isIntersecting)
  //     } 
  //     else if(entry.target === proRef.current){
  //       setProIsVisible(entry.isIntersecting)
  //     } 
  //     else if(entry.target === techRef.current){
  //       setTechIsVisible(entry.isIntersecting)
  //     } 
  //     else if(entry.target === contactRef.current){
  //       setContactIsVisible(entry.isIntersecting)
  //     } 
  //   })
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleIntersection,
  //     {threshold :.25}
  //   );
  //     if (introRef.current) {
  //       observer.observe(introRef.current);
  //       setIntroIsVisible(false)
  //     }
  //     if (whoRef.current) {
  //       observer.observe(whoRef.current);

  //     }
  //     if (experRef.current) {
  //       observer.observe(experRef.current);
  //       setExperIsVisible(false)
  //     }
  //     // if (proRef.current) {
  //     //   observer.observe(proRef.current);
  //     //   setProIsVisible(false)
  //     // }
  //     if (techRef.current) {
  //       observer.observe(techRef.current);
  //       setTechIsVisible(false)
  //     }
  //     if (contactRef.current) {
  //       observer.observe(contactRef.current);
  //       setContactIsVisible(false)
  //     }


  //   return () => { 
  //     // observer.disconnect();
  //             observer.unobserve(whoRef.current)

  //   };
  // }, [whoRef.current]);


  return (

    // <>
    //   <section ref={introRef} className={`tag ${isIntroVisible ? 'visible' : ''}`}>
    //     <Intro />
    //     {/* <Slideword /> */}
    //   </section>

    //   <section id="whoami" ref={whoRef} className={`who-tag ${isWhoVisible ? 'visible' : ''}`}>
    //     <Who />
    //   </section>

    //   <section ref={experRef} className={`tag ${isExperVisible ? 'visible' : ''}`}>
    //     <Expereince />
    //   </section>

    //   <section ref={techRef} className={`tag ${isTechVisible ? 'visible' : ''}`}>
    //     <TechSkills />
    //   </section>

    //   <section id="projects" ref={proRef} className={`tag visible`}>
    //     <Projects />
    //   </section>

    //   <section id="extra" ref={contactRef} className={`tag ${isContactVisible ? 'visible' : ''}`}>
    //     <Contact />
    //   </section>

    //   <section >
    //     <Footer />
    //   </section>
    // </>
    <>
      <section id="intro" ref={sections.intro} className="tag">
        <Intro />
        {/* <Slideword /> */}
      </section>

      <section id="whoami" ref={sections.whoami} className="who-tag">
        <Who />
      </section>

      <section id="exper" ref={sections.exper} className="tag">
        <Expereince />
      </section>

      <section id="tech" ref={sections.tech} className="tag">
        <TechSkills />
      </section>

      <section id="projects" ref={sections.projects} className="tag">
        <Projects />
      </section>

      <section id="extra" ref={sections.extra} className="tag">
        <Contact />
      </section>

      <section >
        <Footer />
      </section>
    </>

  );
}

export default App;
