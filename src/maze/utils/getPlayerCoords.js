import findIndex from 'lodash/fp/findIndex';

const getPlayerCoords = maze => {
  let columnIndex, rowIndex;

  maze.map((row, index) => {
    let foundIndex = findIndex(row => row === 'p')(row);
    if (foundIndex > -1) {
      rowIndex = index;
      columnIndex = foundIndex;
    }
    return foundIndex;
  });

  return [rowIndex, columnIndex];
};

export default getPlayerCoords;
