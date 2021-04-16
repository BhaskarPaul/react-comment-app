import React, { useState, createContext } from "react";

export const CommentStructure = (content, child = []) => {
    return {
        content: content || "",
        like: false,
        childComments: child,
    };
};

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
    const [comments, setComments] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const [userName, setUserName] = useState("");

    return (
        <CommentContext.Provider
            value={{
                comments,
                setComments,
                modalOpen,
                setModalOpen,
                login,
                setLogin,
                userName,
                setUserName,
            }}
        >
            {children}
        </CommentContext.Provider>
    );
};
