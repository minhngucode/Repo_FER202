import { persons } from './PersonList'

function Exercise4() {
    return (
        <>
            <h1>a table of people</h1>
            <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Occupation
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person, index) => (
                        <tr key={index}>
                            <td>
                                {person.name}
                            </td>
                            <td>
                                {person.age}
                            </td>
                            <td>
                                {person.occupation}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default Exercise4