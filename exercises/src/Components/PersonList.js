const persons = [
    { name: "Alice", age: 25, occupation: "Designer" },
    { name: "Bob", age: 18, occupation: "Designer" },
    { name: "Charlie", age: 22, occupation: "Developer" },
    { name: "Diana", age: 19, occupation: "Project Manager" },
    { name: "Eve", age: 30, occupation: "Developer" }
];
function PersonList() {
    return (
        <>
            <h1>Person list</h1>
            <ul>
                {persons.map((person, index) => {
                    return (
                        <li key={index}>
                            {person.name} - {person.age} - {person.occupation}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export {persons}
export default PersonList