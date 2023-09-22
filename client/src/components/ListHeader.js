import React, { useState } from "react";
import Modal from "./Modal";
import { useCookies } from "react-cookie";

const ListHeader = ({ listName, getData }) => {
    const [cookies, setCookie, removeCookie] = useCookies(null);
    const [showModal, setShowModal] = useState(false);

    const signOut = () => {
        console.log("signout");
        removeCookie("Email");
        removeCookie("AuthToken");
        window.location.reload();
    };

    return (
        <div className="list-header">
            <h1>{listName}</h1>
            <div className="button-container">
                <button className="create" onClick={() => setShowModal(true)}>
                    <i
                        class="fa-solid fa-plus"
                        style={{ color: "#ff8c00", marginRight: "5px" }}
                    ></i>
                    Add New Exploration
                </button>
                <button className="signout" onClick={signOut}>
                    <i
                        class="fa-solid fa-right-from-bracket"
                        style={{ color: "#ffffff", marginRight: "5px" }}
                    ></i>
                    Sign Out
                </button>
            </div>
            {showModal && (
                <Modal
                    mode={"create"}
                    setShowModal={setShowModal}
                    getData={getData}
                />
            )}
        </div>
    );
};

export default ListHeader;
