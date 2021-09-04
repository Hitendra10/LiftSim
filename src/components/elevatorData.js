const array = [];
let lastEle=5
for (let i = lastEle- 1; i > 1; i--) {
  array.push(i);
}

const elevator = []
array.map((e)=>{
    let idt = "elevator" + array[e];
    elevator.push(idt)
    
})
//   {
//     id: { id },
//     height: { height },
//     moving: false,
//     position: { position },
//     upBtn: false,
//     downBtn: false,
//   },

