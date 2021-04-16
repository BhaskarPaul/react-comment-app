import React, { useState, useContext } from "react";
import { CommentContext } from "../Context/Context";
import { CommentModal } from "./CommentModal";

export const ShowComments = () => {
    const {
        comments,
        setComments,
        modalOpen,
        setModalOpen,
        userName,
    } = useContext(CommentContext);
    const [color, setColor] = useState(false);
    const [passUserName, setPassUserName] = useState(null);

    const handleDelete = (index) => {
        setComments(comments.filter((comment, idx) => index !== idx));
    };

    const handleModal = (index) => {
        setModalOpen(true);
    };

    const handleLike = (index) => {
        let allComments = [...comments];
        setColor(!color);
        allComments[index].like = color;
        setComments(allComments);
    };

    return (
        <>
            <CommentModal allComments={userName} />
            {comments.map((comment, idx) => {
                return (
                    <div className="show" key={idx}>
                        <div className="comments">
                            <p>{comment.content}</p>
                            <div className="icons">
                                <i
                                    className="fas fa-heart"
                                    style={
                                        comment.like === true
                                            ? { color: "red" }
                                            : { color: "black" }
                                    }
                                    onClick={() => handleLike(idx)}
                                ></i>
                                <i
                                    onClick={() => handleDelete(idx)}
                                    className="fas fa-trash"
                                ></i>
                                <i
                                    className="fas fa-reply"
                                    onClick={() => handleModal(idx)}
                                ></i>
                            </div>
                        </div>
                        <hr />
                    </div>
                );
            })}
        </>
    );
};
