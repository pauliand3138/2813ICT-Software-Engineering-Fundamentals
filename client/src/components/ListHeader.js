import React from "react";

const ListHeader = ({ listName }) => {
    return (
        <div className="list-header">
            <h1>{listName}</h1>
            <div className="button-container">
                <button>Add New Exploration</button>
                <button>Sign Out</button>
            </div>
        </div>
    );
};

export default ListHeader;
