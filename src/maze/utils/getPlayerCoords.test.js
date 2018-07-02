import getPlayerCoords from './getPlayerCoords';

describe('utils/getPlayerCoords', () => {
  it('gets the player index', () => {
    expect(getPlayerCoords([['#', '#', 'p', '#', '#']])).toEqual([0, 2]);
    expect(
      getPlayerCoords([
        ['#', '#', '#', '#', '#'],
        ['#', '#', '#', '#', '#'],
        ['#', '#', 'p', '#', '#'],
        ['#', '#', ' ', '#', '#']
      ])
    ).toEqual([2, 2]);
  });
});
