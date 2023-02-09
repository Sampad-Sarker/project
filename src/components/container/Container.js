import React from "react";

export const Container = (props) => {
  const mouseEnterHandler = props.mouseEnterHandler;
  const { randomPositionOfX, randomPositionOfY } = props.state;
  return (
    <div
      className="container"
      onMouseEnter={mouseEnterHandler}
      style={{
        translate: `${randomPositionOfX}px ${randomPositionOfY}px`,
      }}
    >
      <h1>30 days of react</h1>
    </div>
  );
};
