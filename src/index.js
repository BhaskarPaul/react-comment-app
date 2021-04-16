import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { CommentProvider } from "./Context/Context";

ReactDOM.render(
    <React.StrictMode>
        <CommentProvider>
            <App />
        </CommentProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
