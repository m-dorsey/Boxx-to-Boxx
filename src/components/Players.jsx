
import Jersey from "./Jersey"
import '../assets/styles/Players.css'
import { NavLink } from "react-router-dom"
import { useState } from "react"
import PlayerCard from "./PlayerCard"
import {useLocation} from "react-router-dom"

export const Player = (props) => {

    const location = useLocation()
    console.log(location)

    console.log(Math.round(Math.random()*9) + 1)

    const getArbitraryPoints = (pos) => {
        if (pos == "DEF") {
            return (Math.round(((Math.random() * 9) + 1) * 0.5))
        } else if (pos == "MID") {
            return (Math.round(((Math.random() * 9) + 1) * 0.9))
        } else if (pos == "FWD") {
            return (Math.round(((Math.random() * 9) + 1) * 0.1))
        } else if (pos == "GK") {
            return (Math.round(((Math.random() * 5) + 1) * 0.5))
        }
    }

    const getArbitraryCost = () => {
        return (Math.round(Math.random() * 300) + 100 + "k")
    }

    const getPlayerStat = (player) => {
        if (location.pathname == "/transfers") {
            return player['cost']
        } else if (location.pathname == "/pick-team") {
            return player['next_opp']
            
        } else if (location.pathname == "/points") {
            return player['points']
        }
    }

    let player_info = []
    const get_players = (pos) => {


        if (pos == "DEF") {
            let defenders = props.players_list[pos]
            for (let d in defenders) {
                player_info.push(
                    {
                        "name": defenders[d]['player_name'], 
                        "team" : defenders[d]['player_team'],
                        "cost": getArbitraryCost(),
                        "points": getArbitraryPoints("DEF"),
                        "next_opp": defenders[d]['next_opp']  
                    }
                )
            }

        } else if (pos == "MID") {
            let mids = props.players_list[pos]
            for (let m in mids) {
                player_info.push(
                    {
                        "name": mids[m]['player_name'],
                        "team": mids[m]['player_team'],
                        "cost": getArbitraryCost(),
                        "points": getArbitraryPoints("MID"),
                        "next_opp": mids[m]['next_opp'] 
                    }
                )
            }
        } else if (pos == "FWD") {
            let fwds = props.players_list[pos]
            for (let f in fwds) {
                player_info.push(
                    {
                        "name": fwds[f]['player_name'],
                        "team": fwds[f]['player_team'],
                        "cost": getArbitraryCost(),
                        "points": getArbitraryPoints("FWD"),
                        "next_opp": fwds[f]['next_opp'] 
                    }
                )
            }
        } else if (pos == "SUB") {
            let subs = props.players_list[pos]
            for (let s in subs) {
                player_info.push(
                    {
                        "name": subs[s]['player_name'],
                        "team": subs[s]['player_team'],
                        "cost": getArbitraryCost(),
                        "points": getArbitraryPoints("GK"),
                        "next_opp": subs[s]['next_opp']
                    }
                )
            }
        } else if (pos == "GK") {
            let goalies = props.players_list[pos]
            for (let g in goalies) {
                player_info.push(
                    {
                        "name": goalies[g]['player_name'],
                        "team": goalies[g]['player_team'],
                        "cost": getArbitraryCost(),
                        "points": getArbitraryPoints("GK"),
                        "next_opp": goalies[g]['next_opp']
                    }
                )
            }
        }

        return player_info
    } // end get_players()
    
    const [modal, setModal] = useState(false)
    const toggleModal = (name) => {
        setModal(!modal)
        console.log(name)
    }

    return (
        <div className='formation_line'>
            <div className="player">
                
                {
                    get_players(props.pos).map((player) => (
                        // <p style={{display:'inline-block'}}>hi</p>
                        <div className='player_container'>
                            {/* <div className="player_left_icons">
                                s|x
                            </div> */}
                            <NavLink onClick={() => toggleModal(player['name'])}
                                title={player['team']}
                            >
                                <Jersey key={player} team={player['team']} />
                                {modal &&
                                    (<PlayerCard />)
                                }
                                
                            </NavLink>
                            {/* <div className="player_right_icons">
                                iii
                            </div> */}
                            <div className="player_snippet">
                                <div>{player['name']}</div>
                                <div>{getPlayerStat(player)}</div>
                            </div>
                        </div>
                    ))
                }
                    
            </div>
        </div>
    )
}

export default Player