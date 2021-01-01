import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Helmet>
      <meta name="google-site-verification" content="WfDaX61u21gNu1HpchYs54c7-Uz_xTTNVCCOUy6SalE" />
    </Helmet>
    <Navbar toggleSidebar={toggleSidebar}/>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      {children}
    <Footer/>
    </>
  )
}

export default Layout
