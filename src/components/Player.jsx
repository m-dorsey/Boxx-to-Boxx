
import Jersey from "./Jersey"
import '../assets/styles/Player.css'

export const Player = (props) => {

    console.log(props)

    const num = props.amount
    let num_arr = []
    for (let i = 0; i < num; i++) {
        num_arr.push(i)
    }

    console.log(num_arr)

    return (
        <div className='formation_line'>
            <div className=" player">
                
                {
                    num_arr.map((pos) => (
                        // <p style={{display:'inline-block'}}>hi</p>
                        <div className='player_container'>
                            <div className="player_left_icons">
                                s|x
                            </div>
                            <Jersey team="WAS"/>
                            <div className="player_right_icons">
                                iii
                            </div>
                            <div className="player_snippet">
                                <div>Name</div>
                                <div>cost</div>
                            </div>
                        </div>
                    ))
                }
                
                
            </div>
        </div>
    )
}

export default Player