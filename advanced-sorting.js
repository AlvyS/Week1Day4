var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 22 }
];

// function compareAges(a, b) {
//   var ageA = a.age
//   var ageB = b.age
//   if (ageA < ageB) {
//     return -1;
//   }
//   if (ageA > ageB) {
//     return 1;
//   }
// }

function compareObjects(a, b) {
  var nameA = a.name
  var nameB = b.name
  var ageA = a.age
  var ageB = b.age
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA == nameB) {
    return ageA - ageB
  }
};

var result = students.sort(compareObjects);
console.log(result);