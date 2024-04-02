import './App.css';
import { useEffect, useState } from 'react';
import { Footer } from "./pages/Footer";
import { ProjectCarousel } from "./ProjectCarousel";
import { Intro } from './components/Intro';
import { Who } from './components/Who';
import { Projects } from './pages/Projects';
import { TechSkills } from './components/TechSkills';
import { Contact } from './components/Contact';
import { Expereince } from './components/Experience';


function App() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <>

      <Intro />

      <Who />
      <Expereince />
      <Projects />

      <TechSkills />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
