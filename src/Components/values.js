import React from "react"
import { Link } from "react-router-dom"

function Values(){
    return (
        <div>
            <h1>My Values</h1>
            <Link to={{pathname: '/office/'}}> Back to Office</Link>
        </div>
    )
}

export default Values