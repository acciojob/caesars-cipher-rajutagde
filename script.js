// // Your Script here.
// function rot13(str) {
//   let decodedStr = "";

//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i);

//     if (charCode >= 65 && charCode <= 90) {
//       charCode = ((charCode - 65 + 13) % 26) + 65;
//     }

//     decodedStr += String.fromCharCode(charCode);
//   }

//   return decodedStr;
// }

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