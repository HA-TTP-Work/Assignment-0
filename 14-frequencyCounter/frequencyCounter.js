function frequencyCounter(word) {
  // Insert code here;
  // make use of key value pairs



  const freqCounter = {};



  var len = word.length;

  // could do -1
  //then would be <= len


  for (var i = 0; i < len  ; ++i) {


    if (freqCounter[word[i]] == null) { // wonder if ==0 will work

      freqCounter[word[i]] = 1;
      // first time we see the letter

    } else {

      freqCounter[word[i]] = freqCounter[word[i]] + 1;
      // we have seen the letter before

    }


  }


  return freqCounter;



}

// Do not edit this line;
module.exports = frequencyCounter;
