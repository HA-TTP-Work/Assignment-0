function countOfAllBooleans(arr) {
  // Insert code here;

  // go through the array
  // maybe use every method?
  // use the array size?

  // check if each element is a boolean type
  // increment a counter

  var counter = 0;

  // length or size?
  for (i = 0; i < arr.length ; i++) { // ++i is better

    //if ((arr[i] == true) || (arr[i] == false)) {// does not work on all cases


    //  if ((arr[i] == 1) || (arr[i] == 0)) {// does not work on all cases

    // not sure why these 2 methods do not work
    // for some reason getting counter as 3 instead of 2
    // maybe is counting 0's and 1's ?
    // tried that but that is not the difference either


    if (typeof(arr[i]) == "boolean") { // this works



      counter = counter + 1;
      // ++counter;
      // counter++;



    }





  }


  return counter;


}

// Do not edit this line;
module.exports = countOfAllBooleans;
