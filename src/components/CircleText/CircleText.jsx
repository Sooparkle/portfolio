import React, { useEffect, useState } from 'react';
import './CircleLetter.scss'




const RotatingCircleText = () => {
  const [letters, setLetters] = useState([]);
  // const text = "UiUxThinker & Front-End Programmer.";
  const text = "& PM & Planer & UI / UX Thinker & Front-End ";

  useEffect(() => {
    const letterArray = text?.split('').map((char, index) => ({
      char,
      rotation: (index * 360) / text.length
    }));
    setLetters(letterArray);
  }, []);

  return (
    <div className='circle-container'>
      <div className='circleWrapper'>
        {/* Rotating Circle */}
        <div className='circle'>
          {/* Circle Dot */}
          {/* <div className={styles.circleDot} /> */}
        </div>
        
        {/* Rotating Text */}
        <div className='textCircle'>
          {letters.map((letter, index) => (
            <div
              key={index}
              className='letter'
              style={{
                transform: `rotate(${letter.rotation}deg)`
              }}
            >
              {letter.char}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatingCircleText;