import React, { Component } from 'react';

import { Maze, DEFAULT_MAZE, parseMaze, movePlayer } from 'src/maze';
import { MainController } from 'src/controller';

export const GameContext = React.createContext({});

class App extends Component {
  state = {
    maze: parseMaze(DEFAULT_MAZE),
    lastDirection: 'up'
  };

  handleMove = direction => {
    const { state } = this;

    this.setState({
      ...state,
      lastDirection: direction,
      maze: movePlayer(state.maze, direction)
    });
  };

  render() {
    const { maze } = this.state;

    return (
      <GameContext.Provider data-testid="App" value={this.state}>
        <MainController handleMove={this.handleMove}>
          <Maze maze={maze} />
        </MainController>
      </GameContext.Provider>
    );
  }
}

export default App;
