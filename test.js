const nums = [1, 2, 3];
const showNums = (f1, f2, f3) => {
  console.log(`show numbers: ${f1}, ${f2}, ${f3}`);
};
showNums(...nums); //show numbers: 1, 2, 3
nums.pop();
nums.pop();
nums.push(4);
nums.push(5);
showNums(...nums); //show numbers: 1, 4, 5
nums.pop();
nums.pop();
showNums(...nums, 6); //show numbers: 1, 6, undefined
