function reverseString(str) {
  let r = ""
  for (let i = str.length-1; i >= 0; i--) {
    r += str[i];  
  }
  return r;
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ippississim"); //normal uncapitilzed string
  console.log("=>", reverseString("mississippi"));

  console.log("Expecting: 'iH'"); //capitalized string
  console.log("=>", reverseString("Hi"));

  console.log("");

  console.log("Expecting: 'ybab-tac'"); //hypenated string
  console.log("=>", reverseString("cat-baby"));

  console.log("");

  console.log("Expecting: 'sgod yppah'"); //two words with a space
  console.log("=>", reverseString("happy dogs"));
}

module.exports = reverseString;


/*// Please add your pseudocode to this file
Take in a string as a parameter.
Create a new empty string variable to store the output = r
Write for loop with index variable "i" to start at the end of the original string, the end point of the loop is the 0 index, and decrement backwards.
Accumulate letters in the new string variable with r += str[i].
Finally, return the new complete string.

// And a written explanation of your solution
We couldn't use a reverse built-in function, so I knew I had to iterate backwards, and then accumulate the returned letters into a new string.
*/
