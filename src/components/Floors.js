import React from "react";
import Floor from "./Floor";
import GoToFloor from "../Function/GoToFloor";
//import lastFloor from "../App"

const Floors = ({ lastFloor }) => {
  
  const array = [];

  for (let i = lastFloor - 1; i > 1; i--) {
    array.push(i);
  }
  //console.log(array);
  //console.log("last floor: " + lastFloor);

  return array.map((a) => {
    return a <10 ? (
      <Floor
        level={"0" + a}
        key={a}
        upBtn={true}
        downBtn={true}
        onClick={(e) => {
          GoToFloor(e);
        }}
      />
    ) : (
      <Floor
        level={a}
        key={a}
        upBtn={true}
        downBtn={true}
        onClick={(e) => {
          GoToFloor(e);
        }}
      />
    );
  });
};
export default Floors;
