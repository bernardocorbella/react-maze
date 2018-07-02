import getCharByCoords from './getCharByCoords';

describe('utils/getCharByCoords', () => {
  it('correctly returns char based on coords', () => {
    expect(getCharByCoords([['#', '#', 'p', '#', '#']], [0, 2])).toEqual('p');
    expect(
      getCharByCoords([['#', '#', '#', '#'], ['#', 'a', '#', '#']], [1, 1])
    ).toEqual('a');
  });
});
