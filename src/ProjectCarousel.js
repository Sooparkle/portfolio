import React, { useState } from 'react';

export const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3; // Number of projects to display at once

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? projects.length - slidesToShow : currentIndex - slidesToShow;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + slidesToShow) % projects.length;
    setCurrentIndex(newIndex);
  };

const handleOpenNewTab = (project) => {
  console.log("project", project)
    if (project.isAble === true) {
      window.open(project.url, "_blank", "noopener, noreferrer");
      return;
    } else {
      window.alert(`현재 유지보스 중입니다.\n빠른 시일내로 처리하겠습니다.`);
    }


};

  return (
    <div className="project-carousel">
      <button 
        className='prev-button'
        onClick={handlePrev} 
        disabled={currentIndex === 0}>Prev
      </button>
      
      <div className="project-container">
        {projects.slice(currentIndex, currentIndex + slidesToShow).map((project, index) => (
          <div 
            key={project.title} 
            className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.title} />
            <button onClick={() => handleOpenNewTab(project)}>
              TO SEE
            </button>
            {/* Add more project details or components here */}
          </div>
        ))}
      </div>
      <button
        className='next-button'
        onClick={handleNext}
        disabled={currentIndex + slidesToShow >= projects.length}>Next</button>
    </div>
  );
}

