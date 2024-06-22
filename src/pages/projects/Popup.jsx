import React from "react"
import { Link } from "react-router-dom"

export const PopupList = ({item, closed, handleToggle, current}) =>{


  return(
    <div className={`project-popupdot-inner ${current ? "visiable" : ""} `}
    
    >
      <ul
        onClick={e =>e.stopPropagation()}
      >
        {
          item.popup.map((i, index ) => {
          const [key, value] = Object.entries(i)[0]
            return value ?(
              <li key={index} > 
                <Link to={value} target="_blacnk">{key}</Link>
              </li>
            ) : null
          }  
        )

        }
      </ul>
    </div>
  )
}