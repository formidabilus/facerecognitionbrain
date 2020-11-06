import React from "react";
import "./FaceRecognition.css";

const faceBoxes = ({ boxes }) =>
  boxes.map((box) => {
    return (
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>
    );
  });

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        {faceBoxes}
      </div>
    </div>
  );
};

export default FaceRecognition;
