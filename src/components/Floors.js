import React from "react";
import Floor from "./Floor";
import goToFloor from "../Function/GoToFloor";

const Floors = ({ lastFloor, elevatorArray }) => {
  const array = [];
  for (let i = lastFloor - 1; i > 1; i--) {
    array.push(i);
  }

  return array.map((a) => {
    return a < 10 ? (
      <Floor
        level={`0${a}`}
        key={a}
        upBtn={true}
        downBtn={true}
        onClick={(e) => {
          goToFloor(e, elevatorArray);
        }}
      />
    ) : (
      <Floor
        level={a}
        key={a}
        upBtn={true}
        downBtn={true}
        onClick={(e) => {
          goToFloor(e, elevatorArray);
        }}
      />
    );
  });
};
export default Floors;
