import React, { useState } from 'react';

function ProjectCarousel({ projects }) {
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



  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <div className="project-carousel">
      <button 
        className='prev-button'
        onClick={handlePrev} disabled={currentIndex === 0}>Prev</button>
      <div className="project-container">
        {projects.slice(currentIndex, currentIndex + slidesToShow).map((project, index) => (
          <div 
            key={project.title} 
            className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.imageUrl} alt={project.title} />
            <button onClick={() => handleOpenNewTab(`${project.url}`)}>
             More
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

export default ProjectCarousel;
