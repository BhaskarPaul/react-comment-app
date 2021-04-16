import React, { useContext } from "react";
import Modal from "react-modal";
import { CommentContext } from "../Context/Context";

Modal.setAppElement("#root");

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: `rgb(1, 1, 68)`,
        height: "400px",
        width: "800px",
        borderRadius: "10px",
    },
};

export const CommentModal = ({ allComments }) => {
    const { modalOpen, setModalOpen } = useContext(CommentContext);

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={handleClose}
            style={customStyles}
        >
            <div className="modal">
                <p className="modal-head">
                    You are replying against <span>{allComments}</span>
                </p>
                <input
                    type="text"
                    placeholder="Add your comments..."
                    autoFocus={true}
                />
                <button onClick={() => setModalOpen(false)}>Commit</button>
            </div>
        </Modal>
    );
};
