function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;





  var counter = 0;


  // length or size?
  for (i = 0; i < nums.length ; i++) { // ++i is better

    if (nums[i] == i) {

      counter++;
      // ++ counter is better


    }


  }


  return counter;










}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
