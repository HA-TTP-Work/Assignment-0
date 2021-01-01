function pairSum(nums, target) {
  // Insert code here;

  // can try all unique possible outcomes
  // is there a better method thoguh?

  // this method takes a really long time to process since it tries all
  // possible pairs
  // should find a way to do this better
  // to save resources




  if (nums.length <= 1){

    throw "Array of Size 1";

    // maybe throw error ??

  }


  // brute force method

  for ( var i = 0; i < (nums.length -1) ; i++){



    for ( var j = (i + 1); j < nums.length ; j++){



      if (target == (nums[i] + nums[j])){


        return true;
      }





    }




  }


  return false;





}

// Do not edit this line;
module.exports = pairSum;
