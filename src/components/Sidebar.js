import React from "react"
import Links from "../constants/links"
import { FaAngleDoubleLeft } from "react-icons/fa"
const Sidebar = ({isOpen, toggleSidebar}) => {
  return <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>

    <button className="close-btn" onClick={toggleSidebar}>
      <FaAngleDoubleLeft/>
    </button>
    <div className="side-container">
      <Links styleClass={`${isOpen ? "sidebar-links": ""}`}/>
    </div>
  </aside>
}

export default Sidebar
