const Elevators = ({ elevatorArray }) => {
  return elevatorArray.map((item) => {
    return <div className={`elevator ele${item[8]}${item[9]}`} id={item}></div>;
  });
};
export default Elevators;
