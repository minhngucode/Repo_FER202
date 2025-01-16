import { persons } from "./PersonList";


function groupByOccupation(persons) {
    return persons.reduce((acc, person) => {
        const { occupation } = person;
        if (!acc[occupation]) {
            acc[occupation] = [];
        }
        acc[occupation].push(person);
        return acc;
    }, {});
}
const grouped = groupByOccupation(persons);
function Exercise8() {
    return (
        <>
            <div>
                <h1>Group People by Occupation</h1>
                {Object.keys(grouped).map((occupation) => (
                    <div key={occupation} >
                        <h2>{occupation}</h2>
                        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {grouped[occupation].map((person, index) => (
                                    <tr key={index}>
                                        <td>{person.name}</td>
                                        <td>{person.age}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Exercise8
