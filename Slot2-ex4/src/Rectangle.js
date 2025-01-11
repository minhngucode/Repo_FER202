import React from "react";
import Shape from "./Shape";

const Rectangle = ({ color, length, width }) => {
    const area = length * width;
    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <Shape color={color} />
            <p>Length: {length}</p>
            <p>Width: {width}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Rectangle;
