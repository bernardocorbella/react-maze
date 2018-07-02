import parseMaze from './parseMaze';

describe('utils/parseMaze', () => {
  it('correctly parses a maze array of strings', () => {
    expect(parseMaze(['####'])).toEqual([['#', '#', '#', '#']]);
  });
});
