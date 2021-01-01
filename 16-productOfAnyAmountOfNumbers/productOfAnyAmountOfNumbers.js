function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;

  var product = 1;
  // needs to be 1 since we are mutiplying

  //  for(let i of args){
  //      product = product * i;
  //  }

  // based on an online resource geeks for geeks that explained rest parameters
  // with a sum example


  // alternate method using arguments

  for (var i=0; i < arguments.length; i++) {

    product = product * arguments[i];

    // I prefer this method
    // as I think it is more clear

  }

  // based on another online resource explainging arguments

  // both methods work perfectly



  return product;








}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
