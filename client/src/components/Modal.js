import React from "react";
import { useState } from "react";

const Modal = () => {
    const mode = "create";
    const editMode = mode === "edit" ? true : false;

    const [data, setData] = useState({
        userId: "",
        location: "",
        landscapeId: "",
        vegTypeId: "",
        vegStageId: "",
        burnSeverity: "",
        date: editMode ? "" : new Date(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((data) => ({
            ...data,
            [name]: value,
        }));

        console.log(data);
    };

    return (
        <div className="overlay">
            <div className="modal">
                <div className="form-title-container">
                    <h3>Let's {mode} your research</h3>
                    <button>X</button>
                </div>

                <form>
                    <label>Research Location</label>
                    <input
                        required
                        maxLength={100}
                        placeholder="Location"
                        name="location"
                        value={data.location}
                        onChange={handleChange}
                    />
                    <br />
                    <label>Landscape Position</label>
                    <select
                        value={data.landscapeId}
                        onChange={handleChange}
                        name="landscapeId"
                        id="landscapeId"
                        required
                    >
                        <option value="1">Flat / Undulating</option>
                        <option value="2">Ridge / Hill</option>
                        <option value="3">Slope</option>
                        <option value="4">Valley / Gully</option>
                    </select>
                    <br />
                    <label>Vegetation Type</label>
                    <select
                        value={data.vegTypeId}
                        onChange={handleChange}
                        name="vegTypeId"
                        id="vegTypeId"
                        required
                    >
                        <option value="1">Fern or Herb</option>
                        <option value="2">Grassy</option>
                        <option value="3">Shrubby</option>
                        <option value="4">Rainforest</option>
                        <option value="5">Riparian</option>
                    </select>
                    <br />
                    <label>Vegetation Stage</label>
                    <select
                        value={data.vegStageId}
                        onChange={handleChange}
                        name="vegStageId"
                        id="vegStageId"
                        required
                    >
                        <option value="1">Old</option>
                        <option value="2">Mature</option>
                        <option value="3">Regrowth</option>
                        <option value="4">Mixed</option>
                        <option value="5">Few trees present</option>
                    </select>
                    <br />
                    <label>Burn Severity</label>
                    <select
                        value={data.burnSeverity}
                        onChange={handleChange}
                        name="burnSevId"
                        id="burnSevId"
                        required
                    >
                        <option value="1">Unburnt</option>
                        <option value="2">Low</option>
                        <option value="3">Moderate</option>
                        <option value="4">High</option>
                        <option value="5">Extreme</option>
                    </select>
                    <input className={mode} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Modal;
