/**
 * Read JSON files from filesystem, Promise wrapper
 */
const fs = require('fs');

/**
 * Read the JSON file from the filesystem
 * @param  {String} filepath Filepath of the JSON file that should be read
 * @return {Promise} Resolves with parsed JSON of the file
 */
module.exports = (filepath) => {
  return new Promise((resolve, reject) => {
    return fs.readFile(filepath, 'utf-8', (error, data) => {
      if (error) {
        return reject(error);
      }

      if (!data) {
        reject(new Error('Empty file'));
      }
      else {
        data = JSON.parse(data);
      }

      return resolve(data);
    });

  });
};
