
import '../assets/styles/Fixtures.css'
import teams from '../data/json/teams.json'
import stadiums from '../data/json/stadiums.json'

export const Game = (props) => {

    const getLocalTime = (utc) => {
        let date = new Date(utc)
        return date.toDateString()
    }

    const getTeamFromID = (id) => {
        for (let t in teams) {
            if (teams[t]['team_id'] == id) {
                return teams[t]['team_name']
            }
        }
    }

    const getStadiumFromID = (id) => {
        for (let s in stadiums) {
            if (stadiums[s]['stadium_id'] == id) {
                return stadiums[s]['stadium_name']
            }
        }
    }

    console.log(props)
    return (
        <div className='match_container'>
            <div className='match_title'>Matchday {props.matchday['matchday']}</div>
            {
                props.matchday.games.map((game) => (
                    <div className='game_container'>
                        <div className='game_card'>
                            <div className='game_date'>
                                {getLocalTime(game['date_time_utc'])}
                            </div>
                                <div className='game_score_display'>
                                    <div className='game_home'>
                                        {getTeamFromID(game['home_team_id'])}
                                        <div className='game_score'>{game['home_score']}</div>
                                    </div>
                                    <div className='game_away'>
                                        {getTeamFromID(game['away_team_id'])}
                                    <div className='game_score'>{game['away_score']}</div>
                                </div>
                            </div>
                            <div className='game_stadium'>
                                {getStadiumFromID(game['stadium_id'])}
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Game