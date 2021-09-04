import EleNum from "./EleNum";
const GoToFloor = (e) => {
  let btn = e.target;
  let floorNum = "floorNumber" + btn.id[7] + btn.id[8];
  let floorElement = document.getElementById(floorNum);
  let scroll = document.documentElement.scrollTop;
  let floorTopEdge = floorElement.getBoundingClientRect().y + scroll;
  return EleNum(floorTopEdge);
};
export default GoToFloor;
