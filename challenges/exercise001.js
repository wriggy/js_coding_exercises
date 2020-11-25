function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word[0].toUpperCase() + word.slice(1)
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return [firstName[0].toUpperCase(), lastName[0].toUpperCase()].join('.') 
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  return Math.round(originalPrice*(100+vatRate))/100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  // return as int or to 2dp
  return Math.round(originalPrice*(100-reduction))/100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  if (str.length %2 === 0) {
    let midpoint = str.length/2;
    return str.slice(midpoint-1,midpoint+1)
  } else {
    return str[(str.length-1)/2]
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let reversed = '';
  for (let i = word.length-1; i>-1;i--) {
    reversed += word[i];
  }
  return reversed
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  return words.map(word => reverseWord(word) )
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  return users.filter(item => item.type === 'Linux').length
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let mean = scores.reduce((accumulator, currentVal) => accumulator+currentVal)/scores.length;
  // return as int or to 2dp
  return Math.round(mean*100)/100
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  let retval = '';
  if (n%3 === 0) {
    retval += 'fizz';
  }
  if (n%5 === 0) {
    retval += 'buzz';
  }  
  if (retval === '') {
    retval = n
  }
  return retval
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
