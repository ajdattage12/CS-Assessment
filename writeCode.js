//Problem 1 Sum Zero
//I think this code has TC: O(n^2) and SC: O(n)
let arr = [0, 21, 33, 6, 0, -9];
addZero = false;

for (i = 0; i < arr.length; i++) {
  for (n = i+1; n < arr.length; n++) {
    console.log(`${arr[n]} + ${arr[i]} = ${arr[n] + arr[i]}`)
    if(arr[n] + arr[i] === 0) {
      addZero = true;
    }
  };
};
console.log(addZero);

//Problem 2 Unique Characters Code
// I think this code has TC: O(n) and SC: O(n)
const hasUniqueChars = (input) =>{
    for(let i = 0; i < input.length; i ++){
      if(input.split(input[i]).length > 2){
        return false;
      };
    };
    return true;
  };
console.log(hasUniqueChars("Moonday"));

  //Problem 3 Panagram Sentence Code
  //I think the code has TC: O(n^2) and SC: O(n^2)
  const isPangram = (string) => {
    const letters = string.toLowerCase().match(/[a-z]/g);
    const alphabet = [...new Set(letters)]
    return alphabet.length === 26;
};
console.log(isPangram("My girl wove six dozen plaid jackets before she quit"));

//Problem 4 Longest Word Code 
//I think this code has TC: O(n) and SC: O(n)
const findLongestWord = (string) => {
    let stringSplit = string.split(' ');
    let longestWord = 0;
    for(let i = 0; i < stringSplit.length; i++){
      if(stringSplit[i].length > longestWord){
      longestWord = stringSplit[i].length;
       };
    };
    return longestWord;
  };
  console.log(findLongestWord("I hope you have a wonderful Thanksgiving."));