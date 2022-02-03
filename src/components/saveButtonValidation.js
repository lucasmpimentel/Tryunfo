const isSaveButtonValid = (state) => {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
  } = state;
  let checkMax = 0;
  const TOTAL_SUM = 210;
  const MAX_ATTR = 90;
  const CHECK_NUMBER = 3;
  const sum = +cardAttr1 + +cardAttr2 + +cardAttr3;
  const atributes = [+cardAttr1, +cardAttr2, +cardAttr3];
  atributes.forEach((att) => {
    if (att <= MAX_ATTR && att >= 0) {
      checkMax += 1;
    }
  });
  if (cardName
    && cardDescription
    && cardImage
    && sum <= TOTAL_SUM
    && checkMax === CHECK_NUMBER) {
    return true;
  }
};

export default isSaveButtonValid;
