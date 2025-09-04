export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const reverse = (str) => {
  if (!str) return "";
  return str.split("").reverse().join("");
};

export const contains = (str, subStr) => {
  if (!str || !subStr) return false;
  return str.includes(subStr);
};
