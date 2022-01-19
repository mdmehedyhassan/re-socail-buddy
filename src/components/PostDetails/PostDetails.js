import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Comment from '../Comment/Comment';

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    useEffect(() =>  {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        axios(url)
        .then(data => setPost(data.data))
    } ,[id]); // independency

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(data => setComments(data.data))
    },[id])
    console.log(post)
    return (
        <div>
            <h3>This  is a post details: {id}</h3>
            <p>User posted: {post.id}</p>
            <p>title: {post.title}</p>
            <p>post body: {post.body}</p>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetails;