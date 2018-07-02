import { set, compose } from 'lodash/fp';

import getPlayerCoords from './getPlayerCoords';
import canMoveTo from './canMoveTo';

const removePlayer = coords => set(coords)(' ');
const addPlayer = coords => set(coords)('p');
const removeAndAddPlayer = (oldCoords, newCoords) =>
  compose(
    removePlayer(oldCoords),
    addPlayer(newCoords)
  );

const movePlayer = (maze, direction) => {
  const [curRowIndex, curColIndex] = getPlayerCoords(maze);
  let intendedCoords = [curRowIndex, curColIndex];

  if (direction === 'right') {
    intendedCoords = [curRowIndex, curColIndex + 1];
  }

  if (direction === 'left') {
    intendedCoords = [curRowIndex, curColIndex - 1];
  }

  if (direction === 'up') {
    intendedCoords = [curRowIndex - 1, curColIndex];
  }

  if (direction === 'down') {
    intendedCoords = [curRowIndex + 1, curColIndex];
  }

  if (canMoveTo(maze, intendedCoords)) {
    return removeAndAddPlayer([curRowIndex, curColIndex], intendedCoords)(maze);
  } else {
    return maze;
  }
};

export default movePlayer;
