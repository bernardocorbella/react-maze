import movePlayer from './movePlayer';

describe('utils/movePlayer', () => {
  it('should move a player to the left and return new maze state', () => {
    const maze = [
      ['#', '#', '#', '#', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', ' ', 'p', ' ', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', '#', '#', '#', '#']
    ];

    expect(movePlayer(maze, 'right')).toEqual([
      ['#', '#', '#', '#', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', ' ', ' ', 'p', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', '#', '#', '#', '#']
    ]);

    expect(movePlayer(maze, 'left')).toEqual([
      ['#', '#', '#', '#', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', 'p', ' ', ' ', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', '#', '#', '#', '#']
    ]);

    expect(movePlayer(maze, 'up')).toEqual([
      ['#', '#', '#', '#', '#'],
      ['#', ' ', 'p', ' ', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', '#', '#', '#', '#']
    ]);

    expect(movePlayer(maze, 'down')).toEqual([
      ['#', '#', '#', '#', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', ' ', ' ', ' ', '#'],
      ['#', ' ', 'p', ' ', '#'],
      ['#', '#', '#', '#', '#']
    ]);
  });

  it('should not move a player when moving towards an obstacle', () => {
    const maze = [
      ['#', '#', '#', '#', '#'],
      ['#', '#', 'p', '#', '#'],
      ['#', '#', '#', '#', '#']
    ];

    expect(movePlayer(maze, 'up')).toEqual(maze);
    expect(movePlayer(maze, 'right')).toEqual(maze);
    expect(movePlayer(maze, 'down')).toEqual(maze);
    expect(movePlayer(maze, 'left')).toEqual(maze);
  });
});
