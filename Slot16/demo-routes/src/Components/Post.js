import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/posts.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('response: ',response);
                return response.json();
            })
            .then((data) => setPosts(data))
            .catch((error) => {
                console.error('Error loading posts:', error);
            });
    }, []);

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                        {console.log('post: ',post)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Post;
