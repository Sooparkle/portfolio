import { BiArrowToTop } from "react-icons/bi";
import "./Footer.scss";

export const Footer = ()=>{


  return(
    <footer>
      <ul>
        <li>SOOHAN's PORTFOLIO</li>
        <li>Email : imsoohanmu@gmail.com</li>
      </ul>
      <div>
        <button
          onClick={()=>window.scrollTo({top:0, behavior: 'smooth'})}
        ><BiArrowToTop /></button>
      </div>

      </footer>
  )
}