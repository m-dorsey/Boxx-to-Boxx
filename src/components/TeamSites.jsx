
import teams from '../data/json/teams.json'

import '../assets/styles/Navigation.css'

// const clubs = JSON.parse(teams)
console.log(teams) 

export const TeamSites = () => {

    return (
        <div className='team-site-header'>
            {
                teams.map((team) => (
                    <a className='team-site' target="_blank" href={team['team_website'] }
                        key={team['team_id']} 
                    >
                        <img  
                             src={team['team_badge']} 
                             alt={team['team_abbreviation']} 
                             title={team['team_name']} 
                             className='team-badge'
                        />
                    </a>
                ))
                
            }
        </div>
    )
}

export default TeamSites