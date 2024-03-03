
import '../assets/styles/Pitch.css'
import '../assets/styles/Players.css'
import Players from './Players'

import user_data from '../data/user/user_team.json'

export const Formation = (props) => {

    const default_jersey = "NON"
    let players_list = []

    if (user_data['has_team'] == true) {
        players_list = user_data['players']
    }

    return (
        <div className={props.className}>

            {
                props.formation.map((line) =>
                    <Players
                        key={line[0]}
                        className='formation_line player'
                        team={default_jersey}
                        pos={line[0]}
                        amt={line[1]}
                        players_list={players_list}
                    />
                    
                )
            }

        </div>
    )
}

export default Formation