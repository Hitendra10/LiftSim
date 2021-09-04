import React from "react";
const Floor = (asa) => {
  let upBtn = "_upBtn_" + asa.level;
  let downBtn = "downBtn" + asa.level;
  let floorNum = "floorNumber" + asa.level;

  return (
    <div className="level">
      <hr />
      <h2 className="floorname" id={floorNum}>
        Floor Number {asa.level}
      </h2>
      {asa.upBtn && (
        <button className="btn" onClick={asa.onClick} id={upBtn}>
          Up
        </button>
      )}
      <br />
      {asa.downBtn && (
        <button className="btn" onClick={asa.onClick} id={downBtn}>
          Down
        </button>
      )}
    </div>
  );
};

export default Floor;
