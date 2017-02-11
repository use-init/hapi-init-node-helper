/**
 * Check if a path is a file
 */
const fs = require('fs');

/**
 * Check if a given path is a file
 * @param  {String}  filePath File path to check
 * @return {Boolean}
 */
module.exports = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return false;
  }

  const stats = fs.lstatSync(filePath);

  if (stats.isFile()) {
    return true;
  }

  return false;
};
