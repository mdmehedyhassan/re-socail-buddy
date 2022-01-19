import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res=> res.json())
        // .then(data => setPosts(data))
        
        axios('https://jsonplaceholder.typicode.com/posts')
        .then(data => setPosts(data.data));
        
    },[])
    console.log(posts);
    return (
        <div>
            <h1>This  is home</h1>
            <h3>I have got {posts.length} </h3>
            {
                posts.map(post => <Post post={post} ></Post>)
            }
        </div>
    );
};

export default Home;