function sumOfAllEvenNumbers(nums) {
  // Insert code here;

  // need to check if it is even using the modulus % operator
  // this wil return the remainder we get from division
  //use %2
  // if we get 0 then it is even


  // need to find a better IDE
  // had issues with writing the wrong variable name

  // This Assignment has a major problem
  // It asks for the sum of all even sumOfAllEvenNumbers
  // but the solution it wants is the count of all even numbers



  var evenCount = 0;

  // var evensum = 0;


  // length or size?
  for (i = 0; i < nums.length ; i++) { // ++i is better

    if ((nums[i]%2) == 0) {

      //  evenSum = evenSum + nums[i];

      evenCount++; // even count

      //counter++;
      // ++ counter is better


    }


  }


  return evenCount;

  // return evensum










}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
