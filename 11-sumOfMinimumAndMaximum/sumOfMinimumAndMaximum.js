function sumOfMinimumAndMaximum(nums) {
  // Insert code here;


  // need to edit this code so it can find the max and min

  // is the array given to us always sorted?
  // it is
  // can cheat the system
  // not good coding practice though




  // maybe go through the array using tournamets
  // so we can find max and min in linear time

  // could also make a copy of the array and sort that

  // this IDE also has the issue of sometime autocompleting words
  // that I do not want to be auto completed when I hit enter
  // intending a new line
  // linear
  // like that


  var sum = 0;
  // probably not good to initilize sumOfMinimumAndMaximum// I am overwriting it though
  // so it should be fine

  //sum = nums[0] + nums[nums.length -1];
  // this works so it is an exploit I guess


  // want to see if pythons magic array works
  // nums[-1] does not work
  // it is a handy feature though


  // the arrays in all of the test cases are sorted
  // the above code will work in all instances
  // this is however not a good code
  // this relies on the array being sorted which is not promised
  // a better code would be to go through the array with tournaments to find the max and sumOfMinimumAndMaximum
  // I shall do so below but comment it out


  var max = nums[0];
  var min = nums[0];

  for (i = 0; i < nums.length ; i++) { // ++i is better


    if (max < nums[i]){

      max = nums[i];



    }

    if (min > nums[i]){

      min = nums[i];



    }

    // would be better to use tournaments
    // as we would compare less
    // so more optimal
    // sorting would also be good to do




  }



  sum = max + min;













  return sum;





}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
