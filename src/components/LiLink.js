import React from 'react'
import {FaLinkedin } from "react-icons/fa"

const LiLink = ({linkedin}) => {
    return (
        <div className="soc-link-container">
            <a href={linkedin} className="social-link">
                <FaLinkedin className="social-icon"></FaLinkedin>
            </a>
        </div>
    )
}

export default LiLink
