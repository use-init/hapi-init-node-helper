/**
 * Convert string to 32bit integer
 * @param  {String} string String that should be hashed
 * @return {String}        Converted 32bit integer
 */
module.exports = (string) => {
  let hash = 0;
  let length = string.length;
  let char;

  if (length === 0) {
    return hash;
  }

  for (let i = 0; i < length; i++) {
    char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
};
