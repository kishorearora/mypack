module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("This app wants a string!");
  return string.replace(/\s/g, "");
};