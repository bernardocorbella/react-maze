import { get } from 'lodash';

const getCharByCoords = (maze, coords) => {
  return get(maze, coords);
};

export default getCharByCoords;
