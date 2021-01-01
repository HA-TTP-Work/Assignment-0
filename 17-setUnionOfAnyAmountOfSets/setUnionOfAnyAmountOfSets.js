function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;


  // contains sets of numbers
  // values within a set are unique

  // create a set that holds all the values once


  var unionSet = new Set();



  // iterate through each argument


  for (var i=0; i < arguments.length; i++) {



    // `for...in`/`for...of`

    // need to iterate through the set
    // maybe use entries?

    // unionSet.add();


    //var arr = arguments[i].entries();

    //  for ( var j = 0; j < arr.length; j++){

    // does not work
    // not sure why


    //  unionSet.add(arr[j]);

    //  }







    for (let item of arguments[i]) {
      unionSet.add(item);

      // got this code from mozilla developer

      // this works
      // my previous method does not




    }




  }


  return unionSet;


}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
