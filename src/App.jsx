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
import MainPoints from "./components/points/Points";
import BlogFeed from "./components/BlogFeed/BlogFeed";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = {
    intro: useRef(null),
    whoami: useRef(null),
    exper: useRef(null),
    tech: useRef(null),
    projects: useRef(null),
    extra: useRef(null),
  };

  const sectionComponents = [
    { id: 'intro', component: <Intro />, ref: sections.intro, className: 'tag' },
    { id: 'tech', component: <TechSkillsText />, ref: sections.tech, className: 'tag' },
    { id: 'projects', component: <Projects />, ref: sections.projects, className: 'tag' },
    { id: 'whoami', component: <Who />, ref: sections.whoami, className: 'who-tag' },
    { id: 'exper', component: <MainPoints />, ref: sections.exper, className: 'tag' },
    { id: 'blog', component: <BlogFeed />, ref: null, className: '' },
    { id: 'footer', component: <Footer />, ref: null, className: '' }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const sectionRef = sections[entry.target.id];
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

  useEffect(() => {
    const section = sections.tech.current;
    let scrollPosition = 0;

    const handleScroll = () => {
      const scrollDelta = window.scrollY - scrollPosition;
      scrollPosition = window.scrollY;

      if(section){
        section.scrollLeft += scrollDelta;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {sectionComponents.map(({ id, component, ref, className }) => (
        <section key={id} id={id} ref={ref} className={className}>
          {component}
        </section>
      ))}
      <Slideword />
    </>
  );
}

export default App;