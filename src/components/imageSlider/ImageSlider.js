import React, {useEffect, useRef, useState} from "react";
import './ImageSlider.scss';
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

export const ImageSlider = ({imageUrls}) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImages = () =>{
    setImageIndex(index =>{
      if(index === 0) return imageUrls.length -1
      return index -1
    })
  }

  const showNextImages = () =>{
    setImageIndex(index =>{
      if(index === imageUrls.length -1) return 0
      return index +1
    })
  }



  return(
    <div className="who-slider">
      <div
        className='who-slider-images'
      >
      {
        imageUrls.map((url,index) => (
          <img 
            key={index} 
            src={url} 
            style={{translate : `${-100 * imageIndex}%`}}
            className={`img-slider-img`}/>

        ))
      }
      </div>
      <button
        onClick={showPrevImages}
        className="slider-btn"
        style={{left : -10}}>
          <FaAnglesLeft />
      </button>

      <button
        onClick={showNextImages}
        className="slider-btn"
        style={{right : -10}}>
          <FaAnglesRight />
      </button>

      <div className="slide-imgs-dot-wrap">
        {
          imageUrls.map((a, index)=>(
            <button
              key={index}
              className="slide-imgs-dot"
              onClick={() => setImageIndex(index)}
            >{index === imageIndex ? <GoDotFill /> : <GoDot /> }</button>
          ))
        }
      </div>
    </div>
  )
};