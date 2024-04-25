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

  const introRef = useRef(null);
  const [isIntroVisible, setIntroIsVisible] = useState(false);
  const slideRef = useRef(null);
  const [isSlideVisible, setSlideVisible] = useState(false);
  const whoRef = useRef(null);
  const [isWhoVisible, setWhoIsVisible] = useState(false);
  const experRef = useRef(null);
  const [isExperVisible, setExperIsVisible] = useState(false);
  const proRef = useRef(null);
  const [isProVisible, setProIsVisible] = useState(false);
  const techRef = useRef(null);
  const [isTechVisible, setTechIsVisible] = useState(false);
  const contactRef = useRef(null);
  const [isContactVisible, setContactIsVisible] = useState(false);
  const footerRef = useRef(null);
  const [isFooterVisible, setFooterIsVisible] = useState(false);



  const handleIntersection = (entries) => {
    entries.forEach((entry)=>{
      if (entry.target === introRef.current){
        setIntroIsVisible(entry.isIntersecting)
      } 
      else if(entry.target === whoRef.current){
        setWhoIsVisible(entry.isIntersecting)
      } 
      else if(entry.target === experRef.current){
        setExperIsVisible(entry.isIntersecting)
      } 
      else if(entry.target === proRef.current){
        setProIsVisible(entry.isIntersecting)
      } 
      else if(entry.target === techRef.current){
        setTechIsVisible(entry.isIntersecting)
      } 
      else if(entry.target === contactRef.current){
        setContactIsVisible(entry.isIntersecting)
      } 
      else if(entry.target === footerRef.current){
        setFooterIsVisible(entry.isIntersecting)
      }
    })
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection,
      {threshold :.3}
    );
      if (introRef.current) {
        observer.observe(introRef.current);
      }
      if (whoRef.current) {
        observer.observe(whoRef.current);
      }
      if (experRef.current) {
        observer.observe(experRef.current);
      }
      if (proRef.current) {
        observer.observe(proRef.current);
      }
      if (techRef.current) {
        observer.observe(techRef.current);
      }
      if (contactRef.current) {
        observer.observe(contactRef.current);
      }


    return () => { 
      observer.disconnect();
    };
  }, []);


  return (
    <>
      <section ref={introRef} className={`tag ${isIntroVisible ? 'visible' : ''}`}>
        <Intro />
        {/* <Slideword /> */}
      </section>

      <section id="whoami" ref={whoRef} className={`who-tag ${isWhoVisible ? 'visible' : ''}`}>
        <Who />
      </section>

      <section ref={experRef} className={`tag ${isExperVisible ? 'visible' : ''}`}>
        <Expereince />
      </section>

      <section ref={techRef} className={`tag ${isTechVisible ? 'visible' : ''}`}>
        <TechSkills />
      </section>

      <section id="projects" ref={proRef} className={`tag visible`}>
        <Projects />
      </section>

      <section id="extra" ref={contactRef} className={`tag ${isContactVisible ? 'visible' : ''}`}>
        <Contact />
      </section>

      <section >
        <Footer />
      </section>
    </>

  );
}

export default App;
