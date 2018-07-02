import React, { Component } from 'react';

import { Maze, DEFAULT_MAZE, parseMaze } from 'src/maze';

class App extends Component {
  state = {
    maze: parseMaze(DEFAULT_MAZE)
  };

  render() {
    return (
      <div data-testid="App">
        <Maze maze={this.state.maze} />
      </div>
    );
  }
}

export default App;
