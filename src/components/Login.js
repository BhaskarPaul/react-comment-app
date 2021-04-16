import React, { useContext } from "react";
import { CommentContext } from "../Context/Context";

export const Login = () => {
    const { login, setLogin, userName, setUserName } = useContext(
        CommentContext
    );

    const handleClick = () => {
        if (userName.length < 25) {
            setLogin(true);
            localStorage.setItem("user-login", "true");
            localStorage.setItem("user-name", String(userName));
        } else {
            alert("User Name length should not be greater than 25");
            setUserName("");
        }
    };

    return (
        <div className="entry-form">
            <input
                type="text"
                placeholder="Enter your name ... (max 25 chracters) "
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleClick}>Go</button>
        </div>
    );
};
