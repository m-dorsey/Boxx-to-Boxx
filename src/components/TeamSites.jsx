
const teams = ["angel city", "san diego wave", "bay fc"]

export const TeamSites = () => {

    return (
        <>
            {
                teams.map((t) => (
                    <p style={{display:'inline'}}>{t} </p>
                ))
                
            }
        </>
    )
}

export default TeamSites