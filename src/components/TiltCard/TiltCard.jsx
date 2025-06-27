import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';


const TiltCard = ({project}) => {
  const item = project
  const cardRef = useRef(null);
  const [style, setStyle ] = useState({
    transform: 'rotateX(0) rotateY(0)',
    // transition: 'transform s ease' 
  })

  const handleMouseMove = (e) => {
    if(!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // 기울기 조절
    const multiplier = 10;

    setStyle({
      transform: `rotateX(${-y / multiplier}deg) rotateY(${x / multiplier}deg)`,
      transition: 'transform .5s ease' 
    })
  }


  const handleMouseLeave = () => {
    // 마우스가 떠나면 원래 상태로 부드럽게 돌아가기
    setStyle({
      transform: 'rotateX(0) rotateY(0)',
      transition: 'transform 1.2s ease' // 원래 위치로 돌아갈 때는 더 천천히
    });
  };



  return (
      <div 
        className="project-each"
      >
        <div 
          className="project-p"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={style}
        >
          <img className="project-p-img" src={item.imageUrl} alt={item.name} />
          <p className="project-attribution">{item.contribution} <span>({item.type})</span></p>
        </div>
        <div className="project-info">
          <p className="first"> {item.name}</p>

        {/* 
          <ul className="contents">
            <li className="description">{item.description}</li>
            {
              item.contents.map( (i, index )=> (
                
                <li key={index}>{index+1}. {i}</li>
              ))
            }
          </ul> */}

          <dl className="contents">
            <dt className="description">{item.description}</dt>
            {
              item.contents.map( (i, index )=> (
                
                <dd key={index}>{index+1}. {i}</dd>
              ))
            }
            {/* {
              item.star.map((i, index) => (
                Object.entries(i).map(([key, value]) => (
                  <dd className="contents-star" key={index}><strong>{key}</strong> : {value}</dd>
                ))
              ))
            } */}
          </dl>


          <ul className="project-keywords">
            {item.keywords.map((library,index) => (
              <li key={index}> {library}</li>
            ))}
          </ul>

        {/* project buttons area */}
        <div className="project-icon-wrap">
          <Link to={`/projects/#${item.title.replace(" ","")}`} className="project-detail-link"> 상세보기 </Link>
          {/* <button 
            className="project-live"
            onClick={() => handleOpenDemo(item)}>
            Live Demo
          </button> */}

          {/* popupdot area */}
          {/* <button
            className="project-popupdot"
            onClick={(e) => handleToggle(index, e)}
          >
            <HiOutlineDotsVertical />
            {popupdot === index && <PopupList 
              item={item} 
              handleToggle={handleToggle}
            />}
          </button> */}
        </div>

        </div>
      </div>
        );
    
}

export default TiltCard