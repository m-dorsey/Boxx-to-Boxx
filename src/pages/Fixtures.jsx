
import games from '../data/json/games.json'
import Game from '../components/Game'
import '../assets/styles/Fixtures.css'


export const Fixtures = () => {

    console.log(games)

    return (
        <div className='fixtures'>
            <h1 className='fixtures_header'>Fixtures</h1>
            {
                games.map((matchday) => (
                    <Game matchday={matchday} />
                ))
            }
        </div>
    )
}

export default Fixtures