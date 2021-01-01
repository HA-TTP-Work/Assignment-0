function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;



  var counter = 0;



  for (i = 0; i < nums.length ; ++i) { // ++i is better since just increments

    if (nums[i] == i) {

      ++counter;



    }


  }


  return counter;





}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
