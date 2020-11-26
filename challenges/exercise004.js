function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter(num => num < 1)
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  return names.filter(name => name.startsWith(char))
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  return words.filter(word => word.startsWith('to '))
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter(num => Number.isInteger(num))
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  return users.map(user => user.data.city.displayName)
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.map(num => Math.round(Math.pow(num, 0.5) * 100) / 100)
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let re = new RegExp(str, 'i');
  return sentences.filter(sentence => sentence.match(re))
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  return triangles.map(triangle => Math.max(...triangle))
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
