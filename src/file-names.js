const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCounts = {};
  const renamedFiles = [];

  for (const name of names) {
    if (!nameCounts[name]) {
      // If the name hasn't been used, use it as is
      nameCounts[name] = 1;
      renamedFiles.push(name);
    } else {
      // If the name has been used, find a new name
      let newName;
      let k = nameCounts[name];

      do {
        newName = `${name}(${k})`;
        k++;
      } while (nameCounts[newName]);

      nameCounts[newName] = 1;
      nameCounts[name] = k;
      renamedFiles.push(newName);
    }
  }

  return renamedFiles;
}

module.exports = {
  renameFiles
};
