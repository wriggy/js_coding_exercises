function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let smallNums = [];
  nums.forEach(num => {
    if (num < 1) {
      smallNums.push(num);
    }
  })
  return smallNums
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let namesBegWith = [];
  names.forEach(name => {
    if (name.startsWith(char)) {
      namesBegWith.push(name)
    }
  })
  return namesBegWith
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let verbs = [];
  words.forEach(word => {
    if (word.startsWith('to ')) {
      verbs.push(word)
    }
  })
  return verbs
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let ints = [];
  nums.forEach(num => {
    if (Number.isInteger(num)) {
      ints.push(num)
    }
  })
  return ints
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cities = [];
  users.forEach(user => {
    cities.push(user.data.city.displayName)
  })
  return cities
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let roots = [];
  nums.forEach(num => {
    roots.push(Math.round(Math.pow(num, 0.5) * 100) / 100)
  })
  return roots
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let retArray = [];
  let re = new RegExp(str, 'i');
  sentences.forEach(sentence => {
    if (sentence.match(re)) {
      retArray.push(sentence)
    }
  })
  return retArray
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let retArray = [];
  triangles.forEach(triangle =>
    retArray.push(Math.max(...triangle)))
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
