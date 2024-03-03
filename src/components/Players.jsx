
import Jersey from "./Jersey"
import '../assets/styles/Players.css'

export const Player = (props) => {

    // console.log("------------")
    // console.log(props.pos, props.amt)

    console.log(props)
    let num_arr = []
    for (let i = 0; i < props.amt; i++) {
        num_arr.push(i)
    }
    console.log(num_arr)

    console.log(props.players_list)
    let player_info = []


    const get_players = (pos) => {


        if (pos == "DEF") {
            let defenders = props.players_list[pos]
            for (let d in defenders) {
                player_info.push(
                    {
                        "name": defenders[d]['player_name'], 
                        "team" : defenders[d]['player_team']  
                    }
                )
            }

        } else if (pos == "MID") {
            let mids = props.players_list[pos]
            for (let m in mids) {
                player_info.push(
                    {
                        "name": mids[m]['player_name'],
                        "team": mids[m]['player_team']
                    }
                )
            }
        } else if (pos == "FWD") {
            let fwds = props.players_list[pos]
            for (let f in fwds) {
                player_info.push(
                    {
                        "name": fwds[f]['player_name'],
                        "team": fwds[f]['player_team']
                    }
                )
            }
        } else if (pos == "SUB") {
            let subs = props.players_list[pos]
            for (let s in subs) {
                player_info.push(
                    {
                        "name": subs[s]['player_name'],
                        "team": subs[s]['player_team']
                    }
                )
            }
        } else if (pos == "GK") {
            let goalies = props.players_list[pos]
            for (let g in goalies) {
                player_info.push(
                    {
                        "name": goalies[g]['player_name'],
                        "team": goalies[g]['player_team']
                    }
                )
            }
        }

        return player_info
    }

    console.log(props.pos, props.amt)
    

    

    return (
        <div className='formation_line'>
            <div className=" player">

                {/* {
                    player_info.map((player) => {
                        <div className='player_container'>
                            <div className="player_left_icons">
                                s|x
                            </div>
                            <Jersey key={player} team="NON" />
                            <div className="player_right_icons">
                                iii
                            </div>
                            <div className="player_snippet">
                                <div>Name</div>
                                <div>cost</div>
                            </div>
                        </div>
                    })
                } */}
                
                {
                    get_players(props.pos).map((player) => (
                        // <p style={{display:'inline-block'}}>hi</p>
                        <div className='player_container'>
                            <div className="player_left_icons">
                                s|x
                            </div>
                            <Jersey key={player} team={player['team']}/>
                            <div className="player_right_icons">
                                iii
                            </div>
                            <div className="player_snippet">
                                <div>{player['name']}</div>
                                <div>{player['team']}</div>
                            </div>
                        </div>
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Player