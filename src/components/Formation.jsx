
import '../assets/styles/Pitch.css'
import Player from './Player'

export const Formation = (props) => {
    
    // const numbers = formation.formation.split(" ").map((str) => (Number(str)))
    // console.log("NUMS:", numbers)
    console.log(props)

    let form = ("1 " + props.formation).split(" ")
    console.log(form)

    return (
        <div className={props.className}>
            {
                form.map((line) => (
                    // <p className='formation_line'>{line}</p>
                    <Player className='formation_line' amount={line}></Player>
                ))
            }
        </div>
        // <div>
        //     {
        //         numbers.map((num) => (
        //             <h1 className='pitch_formation'>{num}</h1>
        //         ))
        //     }
        // </div>
    )
}

export default Formation