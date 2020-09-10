import React from "react"
import { Link } from "react-router-dom"

function Fog(){
    return (
        <div>
            <h1>You are in the fog!</h1>
            <Link to={{pathname: '/office/'}}>To Office</Link>
        </div>
    )
}

export default Fog