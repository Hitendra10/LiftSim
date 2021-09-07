import ElevatorNum from "./elevatorNum";

//function gets target button and sends distance of the top edge of the respective floor component from the start of the webPage
const GoToFloor = (e, elevatorArray) => {
  const btn = e.target;
  const floorNum = "floorNumber" + btn.id[7] + btn.id[8];
  const floorElement = document.getElementById(floorNum);
  const scrolledDistance = document.documentElement.scrollTop;
  const floorTopEdge =
    floorElement.getBoundingClientRect().y + scrolledDistance;

  return ElevatorNum(floorTopEdge, elevatorArray);
};
export default GoToFloor;
