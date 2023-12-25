const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
  return false;
}

const teamName = members
  .filter(member => typeof member === 'string') // Filter out non-strings
  .map(name => name.trim()[0].toUpperCase()) // Extract and uppercase first letters
  .sort() // Sort the letters alphabetically
  .join(''); // Join the letters to form a string

return teamName;
}

module.exports = {
  createDreamTeam
};
