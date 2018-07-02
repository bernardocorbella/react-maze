import getCharByCoords from './getCharByCoords';

const canMoveTo = (maze, coords) => {
  return getCharByCoords(maze, coords) === ' ';
};

export default canMoveTo;
