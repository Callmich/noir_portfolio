import React from "react"
import { Link } from "react-router-dom"

function Office(){
    return (
        <div>
            <h1>This is the Office</h1>
            <Link to={{pathname: '/'}}>Back to the Fog</Link>
            <Link to={{pathname: '/files/'}}>Check out Files</Link>
            <Link to={{pathname: '/values/'}}>What are your Values?</Link>
            <Link to={{pathname: '/contact/'}}>Contact</Link>
        </div>
    )
}

export default Office