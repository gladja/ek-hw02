export const changeImg = (value) => {
  if (value > 4000 && value < 12499) {
    return "https://send.monobank.ua/img/jar/uah_33.png";
  }
  if (value > 12500 && value < 23999) {
    return "https://send.monobank.ua/img/jar/uah_50.png";
  }
  if (value > 24000) {
    return "https://send.monobank.ua/img/jar/uah_100.png";
  }
  return "https://send.monobank.ua/img/jar/0.png";
};
