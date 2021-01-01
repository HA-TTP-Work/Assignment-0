function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;


  // This Assignment has a major problem
  // It asks for the sum of all even sumOfNumsWithinARange
  // but the solution it wants is the count of all numbers in that sumOfNumsWithinARange

  // the range is inclusive at both ends

  // we will go through the array and check if each element falls in the range




  var rangeCount = 0;

  // var rangeSum = 0;


  // length or size?
  for (i = 0; i < nums.length ; i++) { // ++i is better

    if (nums[i] >= start && nums[i] <= end) {

      //  rangeSum = rangeSum + nums[i];

      rangeCount++; // even count

      //counter++;
      // ++ counter is better


    }


  }


  return rangeCount;
  // return rangeSum;









}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
