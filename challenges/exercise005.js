const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let nIx = nums.findIndex(num => num === n);
  let retVal = null;
  if ((nIx !== -1) && (nIx < nums.length - 1)) {
    retVal = nums[nIx + 1];
  }
  return retVal
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let frequencies = { 0: 0, 1: 0 };
  for (let i = 0; i < str.length; i++) {
    frequencies[str[i]] += 1
  }
  return frequencies
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let digits = '' + n;
  let reverse = '';
  for (let i = digits.length - 1; i >= 0; i--) {
    reverse += digits[i]
  }
  return +reverse
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let sum = arr => arr.reduce((acc, val) => acc + val);
  let total = 0;
  arrs.forEach(subarr => total += sum(subarr))
  return total
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let newArr = arr.slice();
  if (arr.length > 1) {
    newArr = [arr[arr.length - 1]].concat(arr.slice(1, arr.length - 1), arr[0]);
  }
  return newArr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  let re = new RegExp(searchTerm, 'i');
  for (let key in haystack) {
    if ((typeof haystack[key] === 'string') && (haystack[key].match(re))) {
      return true
    }
  }
  return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  // remove punctuation
  let newStr = str.replace(/[^a-zA-Z ]/g, "").trim();
  let words = newStr.toLowerCase().split(' ');
  let frequencies = {};
  for (let i = 0; i < words.length; i++) {
    if (frequencies[words[i]] === undefined) {
      frequencies[words[i]] = 1
    } else {
      frequencies[words[i]] += 1
    }
  }
  return frequencies
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
