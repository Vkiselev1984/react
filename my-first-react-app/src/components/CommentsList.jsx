import React, { useState } from 'react';
import '../css/CommentsList.css';

const CommentsList = () => {
    const [comments, setComments] = useState([
        { id: 1, text: "This is the first comment" },
        { id: 2, text: "This is the second comment" },
        { id: 3, text: "This is the third comment" }
    ]);

    const handleDelete = (id) => {
        setComments(prevComments => prevComments.filter(comment => comment.id !== id));
    };

    return (
        <div className="container">
            <h2>List of comments</h2>
            <ul className="comments-list">
                {comments.map(comment => (
                    <li key={comment.id} className="comment-item">
                        <span>{comment.text}</span>
                        <button
                            className="delete-button"
                            onClick={() => handleDelete(comment.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsList;