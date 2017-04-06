// The second argument/parameter is expected to be a function
//var names = ["Alice", "Bob", "Waldo", "Winston"]


function findWaldo(arr, found) {
  arr.forEach(function(name, i) {
    if (name === "Waldo") {
      found(i);   // execute callback
    };
  });
}

function actionWhenFound(i) {
  console.log("Found him at index " + i);
}



findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);