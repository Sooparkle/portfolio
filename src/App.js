import './App.css';
import { useEffect, useState } from 'react';
import { Footer } from "./Footer";
import { ProjectCarousel } from "./ProjectCarousel";
import { Intro } from './components/Intro';
import { Who } from './components/Who';
import { Projects } from './pages/Projects';
import { TechSkills } from './components/TechSkills';


function App() {

  return (
    <>

      <Intro />

      <Who />

      <Projects />

      <TechSkills />

      <Footer />
    </>
  );
}

export default App;
