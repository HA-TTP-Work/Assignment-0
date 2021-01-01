function sumOfAllOddNumbers(nums) {
  // Insert code here;


  // similiar to last problem

  // need to check if it is even using the modulus % operator
  // this wil return the remainder we get from division
  //use %2
  // if we get 1 then it is odd
  // or we can just check for != 0


  // need to find a better IDE
  // had issues with writing the wrong variable name

  // This Assignment has a major problem
  // It asks for the sum of all even sumOfAllOddNumbers
  // but the solution it wants is the count of all odd numbers



  var oddCount = 0;

  // var oddSum = 0;


  // length or size?
  for (i = 0; i < nums.length ; i++) { // ++i is better

    if ((nums[i]%2) != 0) { // ==1 should also work

      //  oddSum = oddSum + nums[i];

      oddCount++; // even count

      //counter++;
      // ++ counter is better


    }


  }


  return oddCount;

  // return oddSum;







}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
