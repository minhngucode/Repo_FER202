import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Table } from "react-bootstrap";

export default function AnimalCard({ image, name, scientificName, size, diet, additional, showAdditional }) {
  const handleMoreInfo = () => {
    if (additional && Object.keys(additional).length > 0) {
      showAdditional(additional);
    } else {
      alert("No additional information available.");
    }
  };

  return (
    <Card className="w-100 shadow-lg">
      <Card.Img variant="top" src={image} alt={name} className="animal-image" />

      <Card.Header className="text-white bg-warning text-center">
        <h4 className="mb-0">{name}</h4>
      </Card.Header>

      <Card.Body className="p-0">
        <Table striped bordered hover className="mb-0">
          <tbody>
            <tr>
              <td><strong>Scientific Name:</strong> {scientificName}</td>
            </tr>
            <tr>
              <td><strong>Size:</strong> {size} kg</td>
            </tr>
            <tr>
              <td><strong>Diet:</strong> {diet.join(", ")}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>

      <Card.Footer className="text-center">
        <Button variant="info" onClick={handleMoreInfo}>
          More Info
        </Button>
      </Card.Footer>
    </Card>
  );
}

AnimalCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  additional: PropTypes.shape({
    notes: PropTypes.string,
    link: PropTypes.string,
  }),
  showAdditional: PropTypes.func.isRequired,
};

AnimalCard.defaultProps = {
  additional: {},
};
