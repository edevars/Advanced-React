const verifyNull = (inputs) => {
  const values = Object.values(inputs);
  const keys = Object.keys(inputs);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < values.length; i++) {
    if (values[i] === null || values[i] === '') {
      return keys[i];
    }
  }
};

export default verifyNull;
