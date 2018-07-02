import React from 'react';

import { Maze, DEFAULT_MAZE } from 'src/maze';

const App = () => (
  <div data-testid="App">
    <Maze maze={DEFAULT_MAZE} />
  </div>
);

export default App;
