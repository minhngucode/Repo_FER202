import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const dishes = [
    { id: 0, name: "Uthappizza", image: "https://bijeljina.com/wp-content/uploads/2023/06/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg", category: "mains", label: "Hot", price: "4.99", description: "Indian pancake + pizza" },
    { id: 1, name: "Zucchipakoda", image: "https://www.playfulcooking.com/wp-content/uploads/2011/01/zucchini_fritters.jpg", category: "appetizer", label: "", price: "1.99", description: "Deep-fried Zucchini" },
    { id: 2, name: "Vadonut", image: "https://assets3.thrillist.com/v1/image/1739472/1200x600/scale;", category: "appetizer", label: "New", price: "1.99", description: "Vada or Donut?" },
    { id: 3, name: "ElaiCheese Cake", image: "http://legateaucakes.com/cdn/shop/files/medium-1-2kg-lotus-biscoff-baked-cheesecake-42134855549207.jpg?v=1694165935", category: "dessert", label: "", price: "2.99", description: "New York Style Cheesecake" },
  ];

const DishList = () => {
  return (
    <div className="d-flex flex-wrap">
      {dishes.map((dish) => (
        <Card key={dish.id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={dish.image} style={{maxHeight: '190px'}}/>
          <Card.Body>
            <Card.Title>{dish.name}</Card.Title>
            <Card.Text>{dish.description}</Card.Text>
            <Button as={Link} to={`/dishes/${dish.id}`} variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DishList;
