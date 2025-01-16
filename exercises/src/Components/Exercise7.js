import { persons } from "./PersonList";

const sortByOccupation = [...persons].sort((a, b) => {
    if (a.occupation > b.occupation) return 1;
    if (a.occupation < b.occupation) return -1;
    return a.age - b.age;
})

// sort using localeCompare
// const sortByOccupation2 = [...persons].sort((a,b) => a.occupation.localeCompare(b.occupation))

const sortByAge = [...persons].sort((a, b) => a.age - b.age)
function Exercise7() {
    return (
        <>
            <h1>Sort by occupation and age</h1>
            <ul>
                {sortByOccupation.map((person, index) => (
                    <li key={index}>
                        {person.name} - {person.age} - {person.occupation}
                    </li>
                ))}
            </ul>
            {/* <h1>Sort by age</h1>
            <ul>
                {sortByAge.map((person, index) => (
                    <li key={index}>
                        {person.name} - {person.age} - {person.occupation}
                    </li>
                ))}
            </ul> */}
        </>
    )
}

export {sortByAge}
export default Exercise7