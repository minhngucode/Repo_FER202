import { sortByAge } from "./Exercise7";


function Exercise9(){
    return(
        <>
            <h1>the Oldest and Youngest Person: </h1>
            <h4>{sortByAge[0].name} - {sortByAge[0].age}</h4>
            <h4>{sortByAge[sortByAge.length - 1].name} - {sortByAge[sortByAge.length - 1].age}</h4>
        </>
    )
}

export default Exercise9