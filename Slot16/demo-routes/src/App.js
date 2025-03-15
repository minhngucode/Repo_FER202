import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navigation from './Components/Navigation';
import { Container } from 'react-bootstrap';
import Post from './Components/Post';
import PostDetail from './Components/PostDetail';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <h1>React Router Example</h1>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          } />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
