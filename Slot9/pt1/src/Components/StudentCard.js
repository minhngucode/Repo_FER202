import {Col, Button} from "react-bootstrap";

const StudentCard = ({ student }) => {
    return (
        <Col md={6} className="mb-4">
            <div className="border p-3 text-center">
                <img src={student.image} alt="Student" className="w-100 mb-3" />
                <h5>{student.name}</h5>
                <p>{student.id} - {student.location}</p>
                <div>
                    <input className={student.name + "present"} name="Radio" type="radio" id={student.name + "present"} />
                    <label htmlFor={student.name + "present"}>Present</label>
                    <input className={student.name + "absent"} name="Radio" type="radio" id={student.name + "absent"} />
                    <label htmlFor={student.name + "absent"}>Absent</label>
                </div>
                <Button className="mt-3" variant="warning">Submit</Button>
            </div>
        </Col>
    );
};

export default StudentCard
