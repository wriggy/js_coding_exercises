function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let namesBegWith = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(char)) {
      namesBegWith.push(names[i]);
    }
  }
  return namesBegWith
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let verbs = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith('to ')) {
      verbs.push(words[i]);
    }
  }
  return verbs
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let ints = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      ints.push(nums[i]);
    }
  }
  return ints
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let roots = [];
  for (let i = 0; i < nums.length; i++) {
    // Math.round() vs toFixed() ??
    //roots.push(+(Math.pow(nums[i],0.5)).toFixed(2))
    roots.push(Math.round(Math.pow(nums[i], 0.5) * 100) / 100)
  }
  return roots
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let retArray = [];
  let re = new RegExp(str,'i');
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].match(re)) {
      retArray.push(sentences[i])
    }
  }
  return retArray
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let retArray = [];
  for (let i=0; i<triangles.length;i++) {
    retArray.push(Math.max(...triangles[i]))
  }
  return retArray
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
