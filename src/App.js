import React, { useEffect, useContext } from "react";
import "./App.css";
import { CommentContext } from "./Context/Context";
import { Addcomment } from "./components/Addcomment";
import { ShowComments } from "./components/ShowComments";
import { Login } from "./components/Login";

export const App = () => {
    const { login, setLogin, setUserName } = useContext(CommentContext);

    useEffect(() => {
        const userLoginData = Boolean(localStorage.getItem("user-login"));
        const userLoginName = localStorage.getItem("user-name");
        setLogin(userLoginData);
        setUserName(userLoginName);
    }, []);

    return (
        <div>
            {!login ? (
                <Login />
            ) : (
                <>
                    <Addcomment />
                    <hr align="centre" width="80%" className="divider" />
                    <ShowComments />
                </>
            )}
        </div>
    );
};
