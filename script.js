// Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@rajutagde 
sjoshi91119
/
f2-assignments
Public
Fork your own copy of sjoshi91119/f2-assignments
Code
Issues
Pull requests
Actions
Projects
Security
Insights
f2-assignments/Caesar Cipher
@sjoshi91119
sjoshi91119 Create Caesar Cipher
Latest commit 6509aa9 17 hours ago
 History
 1 contributor
39 lines (29 sloc)  1.56 KB

One of the simplest and most widely known ciphers is a Caesar's Cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string. You need to complete the function rot13 in index.js.

Note: All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

_______________________________________________________________+++++++++++++++++++++++++______________________________________________

// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line
	const string = encodedStr;
	const arr = [];
 for(let i = 0;i<string.length;i++){
	string.charAt(i) = string.charAt(i+13);
	 arr.push(string[i]);
 }
  return ;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
f2-assignments/Caesar Cipher at main · sjoshi91119/f2-assignments