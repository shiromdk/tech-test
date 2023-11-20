import React from "react";
import { useNavigate, useLocation} from "react-router-dom";
const Tab = ({ label, path }) => {
  const navigate = useNavigate();
  return(
    <button
    className={`py-2 px-4 border-b-2 bg-white text-xl grow ${
      useLocation().pathname === path ? 'border-hipages-orange' : 'border-transparent'
    } focus:outline-none`}
    onClick={()=>{navigate(path)}}
  >
    {label}
  </button>
  )
}


export default Tab;
