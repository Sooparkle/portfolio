import { useState } from "react";
import setting from "./assets/react.svg";
import "./App.css";
import { Footer } from "./Footer";
import ProjectCarousel from './ProjectCarousel';

function App() {

  const projects = [
    {
      title: 'Project 1',
      description: '배구, 정관장 레드스파크스',
      imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/76/14/91/1000_F_276149120_Jl8kKWneUc16dTfH2HYj0KShoAaKGWXQ.jpg',
      url : `http://sooparkle.dothome.co.kr/`,
    },
    {
      title: 'Project 2',
      description: '서울시 지역구 독서 베스트',
      imageUrl: `https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-library-icon-png-image_1978700.jpg`,
      url : '',
    },
    {
      title: 'Project 3',
      description: 'Fetch를 위한 숙박 페이지',
      imageUrl: 'https://img.freepik.com/premium-vector/accommodation-line-illustration_120816-3281.jpg',
      url : `https://sooparkle.github.io/`,
    },
  ];


  return (
    <>
    <div className="svg-box">

      <img src={setting} className="svg-container" alt="React logo" />
      <img src={setting} className="svg-container2" alt="React logo" />
      <img src={setting} className="svg-container3" alt="React logo" />
      <img src={setting} className="svg-container4" alt="React logo" />

    </div>

      <h1>Portfolio</h1>
      <div className="main">
        <div className="top">
          <div className="top-name">a Manager</div>
        </div>


        <div className="box"> 
        <ProjectCarousel projects={projects} />

        </div> 

        <div className="bottom">
          <div className="bottom-name">a Front-End</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
