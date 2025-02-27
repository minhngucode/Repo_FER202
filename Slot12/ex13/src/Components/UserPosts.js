import React, { useState, useEffect } from "react";
import { Container, Form, ListGroup, Spinner, Alert } from "react-bootstrap";

function UserPosts() {
  const [userId, setUserId] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) throw new Error("Lỗi tải dữ liệu!");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [userId]);

  return (
    <Container className="form-container">
      <h3 className="title">User Post</h3>
      <Form.Group>
        <Form.Label>Choose User ID</Form.Label>
        <Form.Control as="select" value={userId} onChange={(e) => setUserId(e.target.value)}>
          {[1, 2, 3, 4, 5].map((id) => (
            <option key={id} value={id}>
              User {id}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <ListGroup className="mt-3">
        {posts.map((post) => (
          <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default UserPosts;
