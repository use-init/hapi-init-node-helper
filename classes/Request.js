const request = require('request');
const http = require('http');
const zlib = require('zlib');

class Request {

  // Make the request
  constructor (url, callback) {
    this.url = url;

    let promise = new Promise((resolve, reject) => {
      if (this.url.substr(this.url.length - 3) === '.gz') {
        this.getGzipped(resolve, reject)
      } else {
        this.getFile(resolve, reject);
      }
    });

    return new Promise((resolve, reject) => {
      promise
        .then(callback)
        .catch(reject);
    });
  }

  getGzipped (url, resolve, reject) {
    let buffer = [];

    http.get(this.url, (res) => {
      const gunzip = zlib.createGunzip();

      res.pipe(gunzip);

      gunzip
        .on('data', (data) => {
          buffer.push(data.toString());
        }).on('end', () => {
          resolve(buffer.join(''));
        }).on('error', reject);
    }).on('error', reject);
  };

  getFile (resolve, reject) {
    request(this.url, (error, response, body) => {
      if (response.statusCode !== 200) {
        return reject();
      }

      resolve(body);
    });
  }
}

module.exports = get;
