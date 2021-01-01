import React from 'react'
import {FaLinkedin } from "react-icons/fa"

const LiLink = ({linkedin}) => {
    return (
        <a href={linkedin} className="social-link">
            <div className="soc-link-container">
                <FaLinkedin className="social-icon"></FaLinkedin>
            </div>
        </a>
    )
}

export default LiLink
