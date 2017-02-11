/**
 * Write files to the filesystem, Promise wrapper
 */
const fs = require('fs');

/**
 * Write the file to the filesystem
 * @param  {String}  name Filepath to where the file should be written
 * @param  {String}  data Date that should be written
 * @return {Promise}      Resolves when file was written
 */
module.exports = (name, data) => {
  return new Promise((resolve, reject) => {
    return fs.writeFile(name, data, (error) => {
      if (error) {
        return reject(error);
      }

      return resolve();
    });

  });
};
