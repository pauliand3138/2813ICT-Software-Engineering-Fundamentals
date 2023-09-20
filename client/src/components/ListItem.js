import React from "react";
import FormIcon from "./FormIcon";

const ListItem = ({ form }) => {
    return (
        <li className="list-item">
            <div className="info-container">
                <FormIcon />
                <p>{form.location}</p>
            </div>

            <div className="button-container">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </li>
    );
};

export default ListItem;
