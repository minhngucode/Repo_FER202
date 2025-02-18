import React from "react";
import { Container, Row } from "react-bootstrap";
import StudentCard from "./StudentCard"; // Import StudentCard nếu bạn cũng tách nó

const StudentList = () => {
    const students = [
        {
            id: "DE180468",
            name: "Doan Xuan Son",
            location: "Da Nang",
            image: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.15752-9/476089195_1845189876250051_5726797038482600462_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEnIHKTJ4pnOEZg9a05BCvm4UHttcWWVQfhQe21xZZVB4Q3HUh52ZN8QoFWO1Qozca-9PMxPJdh0ery08A0MZIq&_nc_ohc=XpcKgkAERr8Q7kNvgHKZnxg&_nc_oc=AdjtffbI7fSaFtNRLLdv69xjmw9p2g-6dIkIt0Mc-HRYO2-x-zJ0SJ8-xYvRkHfx5MY&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&oh=03_Q7cD1gFyoSK67Defr6peKiia5VavBeupmMAobJ9-yg7ZeG_o9w&oe=67DBDCF6",
        },
        {
            id: "DE180469",
            name: "Doan Xuan Son",
            location: "Hanoi",
            image: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.15752-9/476089195_1845189876250051_5726797038482600462_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEnIHKTJ4pnOEZg9a05BCvm4UHttcWWVQfhQe21xZZVB4Q3HUh52ZN8QoFWO1Qozca-9PMxPJdh0ery08A0MZIq&_nc_ohc=XpcKgkAERr8Q7kNvgHKZnxg&_nc_oc=AdjtffbI7fSaFtNRLLdv69xjmw9p2g-6dIkIt0Mc-HRYO2-x-zJ0SJ8-xYvRkHfx5MY&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&oh=03_Q7cD1gFyoSK67Defr6peKiia5VavBeupmMAobJ9-yg7ZeG_o9w&oe=67DBDCF6",
        },
        {
            id: "DE180468",
            name: "Doan Xuan Son",
            location: "Da Nang",
            image: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.15752-9/476089195_1845189876250051_5726797038482600462_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEnIHKTJ4pnOEZg9a05BCvm4UHttcWWVQfhQe21xZZVB4Q3HUh52ZN8QoFWO1Qozca-9PMxPJdh0ery08A0MZIq&_nc_ohc=XpcKgkAERr8Q7kNvgHKZnxg&_nc_oc=AdjtffbI7fSaFtNRLLdv69xjmw9p2g-6dIkIt0Mc-HRYO2-x-zJ0SJ8-xYvRkHfx5MY&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&oh=03_Q7cD1gFyoSK67Defr6peKiia5VavBeupmMAobJ9-yg7ZeG_o9w&oe=67DBDCF6",
        },
        {
            id: "DE180468",
            name: "Doan Xuan Son",
            location: "Da Nang",
            image: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.15752-9/476089195_1845189876250051_5726797038482600462_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEnIHKTJ4pnOEZg9a05BCvm4UHttcWWVQfhQe21xZZVB4Q3HUh52ZN8QoFWO1Qozca-9PMxPJdh0ery08A0MZIq&_nc_ohc=XpcKgkAERr8Q7kNvgHKZnxg&_nc_oc=AdjtffbI7fSaFtNRLLdv69xjmw9p2g-6dIkIt0Mc-HRYO2-x-zJ0SJ8-xYvRkHfx5MY&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&oh=03_Q7cD1gFyoSK67Defr6peKiia5VavBeupmMAobJ9-yg7ZeG_o9w&oe=67DBDCF6",
        },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Student Detail</h2>
            <Row>
                {students.map((student, index) => (
                    <StudentCard key={index} student={student} />
                ))}
            </Row>
        </Container>
    );
};

export default StudentList;
