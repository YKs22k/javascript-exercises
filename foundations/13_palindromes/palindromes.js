const palindromes = function (str) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
