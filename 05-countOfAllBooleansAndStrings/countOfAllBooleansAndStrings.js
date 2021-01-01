function countOfAllBooleansAndStrings(arr) {
  // Insert code here;

  // similiar to the last assigment just need to also
  // check if the datatype is string

  // go through the array
  // maybe use every method?
  // use the array size?

  // check if each element is boolean using tupe of
  // then check for string


  // increment counter

  // const modifier since we do not want to change what is passed?

  var counter = 0;

  // length or size?
  for (i = 0; i < arr.length ; i++) {



    if (typeof(arr[i]) == "boolean" || typeof(arr[i]) == "string" ) {



      //counter = counter + 1;
      ++counter;
      // counter++;



    }









  }


  return counter;








}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
