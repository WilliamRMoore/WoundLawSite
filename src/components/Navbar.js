import React from "react"
//import logo from "../assets/WoundLawLogo.png"
import Logo from "../components/Logo"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({toggleSidebar}) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Logo/>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight/>
        </button>
      </div>
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar
