import React from 'react';
import { shallow } from 'enzyme';

import { Maze, DEFAULT_MAZE, parseMaze } from 'src/maze';
import { MainController } from 'src/controller';
import App from './App';

describe('<App />', () => {
  const handleMove = () => {};
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.is('[data-testid="App"]')).toBe(true);

    expect(wrapper.children().length).toBe(1);
  });
});
