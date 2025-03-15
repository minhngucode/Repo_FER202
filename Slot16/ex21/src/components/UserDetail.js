import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const users = [
  { firstName: "John", lastName: "Done", age: 25 },
  { firstName: "Mary", lastName: "Thompson", age: 35 },
  { firstName: "John", lastName: "Smith", age: 30 },
  { firstName: "Emily", lastName: "Johnson", age: 25 },
  { firstName: "William", lastName: "Davis", age: 34 },
];

const UserDetail = () => {
  const { id } = useParams();
  const user = users[id];
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Body>
        <Card.Title>{user.firstName} {user.lastName}</Card.Title>
        <Card.Text>Age: {user.age}</Card.Text>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </Card.Body>
    </Card>
  );
};

export default UserDetail;
