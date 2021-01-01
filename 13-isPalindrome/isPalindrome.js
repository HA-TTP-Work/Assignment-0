function isPalindrome(word) {
  // Insert code here;

  // similiar to the Hackerrank challenge that we did before

  // does it only take in words?
  // what about sentences?
  // if only words than no need to consider spaces

  // also are there any capital letters?

  // can do this in 2 ways
  // the first is by going through half of the word and checking the position index
  // with length - the current position index
  // if we get one instance of not being the same we are done
  // if we finish and we never get false it is
  // a palindrome


  var check = word.toLowerCase();
  // might not be needed but good practice
  // is not needed
  // tried running the test cases without it and it still passes

  //

  //var check = word;

  var len = check.length;
  // does length need length() ?

  // should it be lenth - 1?
  // this works though
  // if I do -1 here I think I can remove it from underneath



  for (var i = 0; i <= (len/2); ++i) {
    if (check[i] != check[len - 1 - i]) {
      return false;
    }
  }
  return true;



}

// Do not edit this line;
module.exports = isPalindrome;
