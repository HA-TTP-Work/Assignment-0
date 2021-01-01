function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;

  // need to properly indent code



  var counter = 0;


  // length or size?
  for (i = 0; i < nums.length ; i++) { // ++i is better

    if (nums[i]< target) {

      counter++;
      // ++ counter is better


    }


  }


  return counter;


}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
