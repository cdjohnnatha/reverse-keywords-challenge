const removeArrayElement = (array, indexToRemove) => {
  if (array && array.length > 0) {
    const copiedArray = [...array];
    copiedArray.splice(indexToRemove, 1);
    return copiedArray;
  }
  return array;
};

module.exports = {
  removeArrayElement,
};
