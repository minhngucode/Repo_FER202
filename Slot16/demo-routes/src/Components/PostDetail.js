import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        console.log('Fetching post for ID:', id); 

        fetch('/posts.json') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load posts.json');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data); 
                const foundPost = data.find(p => p.id === id); 
                console.log('Found Post:', foundPost); 
                setPost(foundPost);
            })
            .catch(error => console.error('Error loading post:', error));
    }, [id]);

    if (!post) {
        return <h2>Post not found</h2>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;
