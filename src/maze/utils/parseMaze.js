const parseMaze = mazeArrayOfStrings => {
  return mazeArrayOfStrings.map(rowString => rowString.split(''));
};

export default parseMaze;
