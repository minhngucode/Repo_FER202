import React from "react";
import Shape from "./Shape";

const Triangle = ({ color, base, height }) => {
    const area = 0.5 * base * height;
    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <Shape color={color} />
            <p>Base: {base}</p>
            <p>Height: {height}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Triangle;
