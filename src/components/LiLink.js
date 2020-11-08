import React from 'react'
import { Link } from "gatsby"
import {FaLinkedin } from "react-icons/fa"

const LiLink = ({linkedin}) => {
    return (
        <div>
            <a href={linkedin} className="social-link">
                <FaLinkedin className="social-icon"></FaLinkedin>
            </a>
        </div>
    )
}

export default LiLink
