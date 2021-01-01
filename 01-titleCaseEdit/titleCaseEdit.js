function titleCaseEdit(title) {
  // Insert code here;

  // need an IDE that can show errors
  // try out visual studio



  // need to use toUpperCase() to make UpperCase
  // need to do this on the first letter of eac string which
  // will be in position 0
  // title[0] would access the first letter in title

  // need to use .split(" ") to break tokenize the string

  var temp = title;

  tokens = temp.split(" ");
  // maybe we can use tokenize instead?
  // now we go thhrough all the tokens

  var changedTitle = ""; // what we will return

  for (let i = 0; i < tokens.length; i++) {
    tokens[i] = tokens[i][0].toUpperCase() + tokens[i].substr(1);
    // would be easier to understand by making a new string
    // we are replacing the old word with one that has a capital first letter



  }

  changedTitle = tokens.join(" ");
  // do not need to trim
  // if not passed anything will use comma to seperate
  // maybe a better way to do this

  return changedTitle;

}

// Do not edit this line;
module.exports = titleCaseEdit;
