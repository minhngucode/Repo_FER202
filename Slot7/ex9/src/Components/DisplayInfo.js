let obj = {
    name: "Minh",
    age: "20",
    address: "Quang Binh",
    job: "Developer"
}
const DisplayInfo = () => {
    return (
        <div>
        <h1>Display Info</h1>
        <p>My name is {obj.name}</p>
        <p>I'm {obj.age} year old, My hometown is {obj.address}. My job is {obj.job}</p>
        </div>
    );
}

export default DisplayInfo;