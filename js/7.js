// 4 POINTS

/*
 Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

 Trailing Zeros are the zeros after a decimal point which don't affect the value 
 (e.g. the last three zeros in 3.4000 and 3.04000).

 Leading Zeros are the zeros before a whole number which don't affect the value 
 (e.g. the first three zeros in 000234 and 000230).
*/

/*asdsd
  Example 

  removeLeadingTrailing("230.000") ➞ "230"
  removeLeadingTrailing("00402") ➞ "402"
  removeLeadingTrailing("03.1400") ➞ "3.14"
  removeLeadingTrailing("30") ➞ "30"

*/

const removeLeadingTrailing = (arr) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] == 0) {
      continue
    } else if (arr[i] >= 1){
      res.push(arr[i])
    }
    
  }
  console.log(res)
};

const playground7 = () => {
  // Put your number here
  const res = removeLeadingTrailing("23.00") || "No Result";

  document.getElementById("test-result-7").innerHTML = res;
};

const checkResult7 = () => {
  const test1 = removeLeadingTrailing("230.000") === "230";
  const test2 = removeLeadingTrailing("00402") === "402";
  const test3 = removeLeadingTrailing("03.1400") === "3.14";
  const test4 = removeLeadingTrailing("30") === "30";

  document.getElementById("score-result-7").innerHTML = `<div>
    <div>Test 1 = ${test1}</div>
    <div>Test 2 = ${test2}</div>
    <div>Test 3 = ${test3}</div>
    <div>Test 4 = ${test4}</div>
    ${
      test1 && test2 && test3 && test4
        ? `<div class="correct">Well done, all tests are correct!</div>`
        : ""
    }
  </div>`;
};
