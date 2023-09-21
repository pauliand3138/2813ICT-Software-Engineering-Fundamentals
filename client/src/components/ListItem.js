import React, { useState } from "react";
import FormIcon from "./FormIcon";
import Modal from "./Modal";

const ListItem = ({ form, getData }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <li className="list-item">
            <div className="info-container">
                <FormIcon />
                <p>{form.location}</p>
            </div>

            <div className="button-container">
                <button className="edit" onClick={() => setShowModal(true)}>
                    Edit
                </button>
                <button className="delete">Delete</button>
            </div>
            {showModal && (
                <Modal
                    mode={"edit"}
                    setShowModal={setShowModal}
                    getData={getData}
                    form={form}
                />
            )}
        </li>
    );
};

export default ListItem;
