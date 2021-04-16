import React, { useState, useContext } from "react";
import { CommentContext, CommentStructure } from "../Context/Context";

export const Addcomment = () => {
    const [comment, setComment] = useState("");
    const {
        comments,
        setComments,
        userName,
        setUserName,
        login,
        setLogin,
    } = useContext(CommentContext);

    const handleSubmit = () => {
        setComments([...comments, CommentStructure(comment)]);
        setComment("");
    };

    const handleSignOut = () => {
        setLogin(false);
        setUserName("");
        localStorage.removeItem("user-login");
        localStorage.removeItem("user-name");
    };

    return (
        <div>
            <div className="add-comments">
                <p className="modal-head">
                    You are logged in as ID: <span>{`@${userName}`}</span>
                    <span
                        style={{
                            backgroundColor: "rgb(1, 1, 68)",
                            color: "white",
                            cursor: "pointer",
                        }}
                        onClick={handleSignOut}
                    >
                        Log Out
                    </span>
                </p>
                <input
                    type="text"
                    placeholder="Add your comments..."
                    autoFocus={true}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={handleSubmit}>Commit</button>
            </div>
        </div>
    );
};
