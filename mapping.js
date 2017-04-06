var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

//const square = ({x, y}) => Math.sqrt((x * x) + (y * y));

var result = input.map(square);

function square(obj) {
  // console.log(obj);
  var x = obj.x
  var y = obj.y
  // console.log("x:" + obj.x);
  // console.log("y:" + obj.y);
  var z = Math.sqrt((x * x) + (y * y));
  // console.log("z:" + z)
  return z
};


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);