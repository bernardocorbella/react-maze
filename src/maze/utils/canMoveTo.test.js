import canMoveTo from './canMoveTo';

describe('util/canMoveTo', () => {
  it('should return a boolean if coords is a `space`', () => {
    const maze = ['# '];

    expect(canMoveTo(maze, [0, 0])).toBe(false);
    expect(canMoveTo(maze, [0, 1])).toBe(true);
  });
});
