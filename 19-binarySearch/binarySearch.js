class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;



    /*

    use this to make comments and not the triple tilda ```

    */
    




    // can do binary search in 2 ways
    // recursively and iteratively
    // I do not like the recursive method so I will use iteration

    // sometimes forget to add ;
    // need a better IDE that can catch that

    // the solution needs to be recursive so the below solution will not work




    //  var start = 0;
    //  var end = nums.length - 1;

    // while (start <= end) {

    //   var mid = Math.floor((start + end)/2);

    //   if (nums[mid] == target){

    //   return true

    // } else if (nums[mid] < target){
    // left half of array has been eliminated

    //    start = mid + 1;



    // } else if (nums[mid] > target){ // could just be else

    // should probably be else since there are no other possibilities
    // might cause an error


    // right half of the array has been eliminated

    //   end = mid - 1;



    //   }




    // }


    // return false;




    // prefer iteration to recursion but it must be recursive

    // will be more difficult to code since there is no

    // start and end arguments
    // maybe need to create subsets of the initial array

    // arr.slice(1, 3);
    // maybe need to use this?
    // how will crossing over affect slicing





    if (nums.length == 0) {

      return false;

      // if nums == null?
      // maybe need to check with length ==0 instead?
      // maybe equal to null?

      // no slice could be made
      // so the array and target do not exist

    }


    var start = 0;
    var end = nums.length - 1;

    var mid = Math.floor((start + end)/2);

    if (nums[mid] == target){

      return true

    }else if (nums[mid] < target) {

      // left half of array has been eliminated

      var newArr = nums.slice((mid+1), (end + 1 ));
      // need end + 1 as it is not inclusive
      // could use length
      return this.binarySearch(newArr, target);



    }else if (nums[mid] > target) {
      // right half eliminated
      var newArr = nums.slice(start, mid );
      return this.binarySearch(newArr, target);


    }




  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
