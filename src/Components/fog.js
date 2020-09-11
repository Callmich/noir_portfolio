import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

function Fog(){
    return (
        <div class="foggy_city">
            <div class="absolute-bg"></div>
            <div class="fog-container">
                <div class=" fog-img first_fog"></div>
                <div class="fog-img second_fog"></div>
            </div>

            <div class="lamp_light"></div>

            <div class="to_office">
                <Link to={{pathname: '/office/'}}>To Office</Link>
            </div>
            
        </div>
    )
}

export default Fog