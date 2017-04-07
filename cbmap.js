var words = ["ground", "control", "to", "major", "tom"];

function alvyMap(ary, cb) {
  var newAry = [];
  for (var i in ary) {
    var temp = cb(ary[i]);
    newAry.push(temp);
  }
  return newAry
}

function letterCount(a) {
  return a.length;
};

var lengthOfEachWord = alvyMap(words, letterCount);
console.log(lengthOfEachWord);



// map(words, function(word) {
//   return word.length;
// });


// [6, 7, 2, 5, 3] result