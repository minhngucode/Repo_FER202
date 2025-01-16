function Exercise2(){
    const person = {
        name: 'minh',
        age: '20',
        occupation: 'developer'
    }
    return (
        <>
        <h1>a person's details</h1>
        <p>{person.name} - {person.age} - {person.occupation}</p>
        </>
    )
}

export default Exercise2