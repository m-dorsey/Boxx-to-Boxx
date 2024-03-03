
import { useState } from "react"
import '../assets/styles/Players.css'

export const PlayerCard = (props) => {

    return (
        <div className="player_modal" >
            <div className="player_modal_content">
                <h2>Hello, {props.name} </h2>
                <br/>
                {/* <p>
                    Lorem ipsum dolor sit amet 
                </p> */}
            </div>
        </div>
    )
}

export default PlayerCard