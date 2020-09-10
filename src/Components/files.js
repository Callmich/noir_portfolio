import React from "react"
import { Link } from "react-router-dom"

function Files(){
    return (
        <div>
            <h1>My Case Files</h1>
            <Link to={{pathname: '/office/'}}> Back to Office</Link>
        </div>
    )
}

export default Files