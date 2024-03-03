
import '../assets/styles/Pitch.css'
import '../assets/styles/Players.css'
import Players from './Players'

import user_data from '../data/user/user_team.json'

export const Formation = (props) => {

    const default_jersey = "NON"
    let players_list = []

    if (user_data['has_team'] == true) {
        // console.log("YAY")
        players_list = user_data['players']
    }

    // console.log(players_list)

    // console.log(props.formation)

    // console.log(user_data)

    // let form = ("4 1 " + props.formation).split(" ")


    return (
        <div className={props.className}>

            {
                props.formation.map((line) => 
                    // console.log(line[0])
                    // console.log(line[1])
                    <Players
                        className='formation_line player'
                        team={default_jersey}
                        pos={line[0]}
                        amt={line[1]}
                        players_list={players_list}
                    />
                    // <Players 
                    //     className='formation_line player' 
                    //     team={default_jersey} 
                    //     pos={line[0]} 
                    //     amt={line[1]} 
                    //     players_list={players_list}
                    // />
                )
            }
            {/* {
                form.map((line) => (
                    <Players className='formation_line player' team={default_jersey} amount={line} players_list={players_list}></Players>
                ))
            } */}
        </div>
    )
}

export default Formation