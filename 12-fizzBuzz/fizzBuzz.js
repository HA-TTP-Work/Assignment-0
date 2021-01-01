function fizzBuzz(start, end) {
  // Insert code here;


  // similiar to the hackerrank challenege that we did before

  let array = [];
  // the empty array we will return
  // not sure ehat let means
  // should look it up

  for (var i = start; i <= end; ++i){

    if ( (i%3 == 0) && (i%5 == 0)   ) { // maybe add brackets

      array.push("FizzBuzz")


    } else if (i%3 ==0)  {


      array.push("Fizz");

    } else if (i%5 ==0)  {


      array.push("Buzz");

    } else {

      array.push(i);

    }



  }


  return array;





}

// Do not edit this line;
module.exports = fizzBuzz;
