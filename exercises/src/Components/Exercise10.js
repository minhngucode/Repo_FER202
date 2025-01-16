import { persons } from "./PersonList";

function calculateAverageAgeByOccupation(persons) {
    const occupationAges = persons.reduce((acc, person) => {
        const { occupation, age } = person;

        if (!acc[occupation]) {
            acc[occupation] = { totalAge: 0, count: 0 };
        }

        acc[occupation].totalAge += age;
        acc[occupation].count += 1;

        return acc;
    }, {});
    const averageAges = {};
    for (const occupation in occupationAges) {
        averageAges[occupation] = (
            occupationAges[occupation].totalAge / occupationAges[occupation].count
        ).toFixed(2);
    }

    return averageAges;
}
function Exercise10() {
    const averageAges = calculateAverageAgeByOccupation(persons);
    return (
        <>
            <h1>Average Age by Occupation</h1>
            <ul>
                {Object.entries(averageAges).map(([occupation, averageAge]) => (
                    <li key={occupation}>
                        {occupation}: {averageAge} years
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Exercise10;