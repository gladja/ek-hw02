export const validateColor = (value) => {
  if (value >= 1 && (value < 10 || value > 29999)) {
    return true;
  }
  return false;
};
