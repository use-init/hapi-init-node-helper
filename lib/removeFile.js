/**
 * Delete a file from filesystem, Promise wrapper
 */
const fs = require('fs');

/**
 * Delete the file from the filesystem
 * @param  {String}  name Filepath
 * @return {Promise}      Resolves when file was deleted
 */
module.exports = (name) => {
  return new Promise((resolve, reject) => {
    return fs.unlink(name, (error) => {
      if (error) {
        return reject(error);
      }

      return resolve();
    });

  });
};
