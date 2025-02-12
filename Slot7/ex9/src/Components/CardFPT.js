import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = ({ text }) => {
  return <h5 className="fw-bold">{text}</h5>;
};

const Description = ({ text }) => {
  return <p className="mb-0">{text}</p>;
};

const Image = ({ url }) => {
  return <img src={url} alt="FPT Logo" className="me-3" style={{ width: "120px" }} />;
};

const CardFPT = ({ item }) => {
  return (
    <div className="card shadow-sm border rounded p-3" style={{ maxWidth: "600px" }}>
      <div className="d-flex align-items-center">
        <Image url={item.imageUrl} />
        <div>
          <Title text={item.title} />
          <Description text={item.description} />
        </div>
      </div>
    </div>
  );
};

export default CardFPT;
