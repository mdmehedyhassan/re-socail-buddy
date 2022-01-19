import React from 'react';

const Comment = ({comment}) => {
    const {name, email} = comment;
    return (
        <p>
           {name}: {email} 
        </p>
    );
};

export default Comment;