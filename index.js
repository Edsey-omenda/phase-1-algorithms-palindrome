function isPalindrome(string) {
  // Write your algorithm here
  //This is a palindrome code solution using while loop
  let length = string.length
  let half_way = (length / 2);
  let i = 0;
  while(i < half_way){
    if (string[i] !== string[length - 1-i]){
      return false;
    }
    i++;
    return true;
  }
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
