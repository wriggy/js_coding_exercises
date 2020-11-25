function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  // linting error with ** (ES7)
  // return nums.map(n => n ** 2)
  return nums.map(n => Math.pow(n, 2))
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let retval = words[0];
  if (words.length > 1) {
    let capitalised = words.slice(1).map(word => word[0].toUpperCase() + word.slice(1))
    retval += capitalised.join('')
  }
  return retval
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let retval = 0;
  for (let i = 0; i < people.length; i++) {
    retval += people[i].subjects.length
  }
  return retval
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  return menu.some(dish => dish.ingredients.some(item => item === ingredient))
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  let uniqueNums = arr1.filter((n, index) => arr1.indexOf(n) === index);
  let duplicates = uniqueNums.filter(n => arr2.indexOf(n) !== -1);
  return duplicates.sort((a, b) => a - b)
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
