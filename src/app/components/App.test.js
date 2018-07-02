import React from 'react';
import { shallow } from 'enzyme';

import { Maze, DEFAULT_MAZE } from 'src/maze';
import App from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.is('[data-testid="App"]')).toBe(true);
    expect(wrapper.contains(<Maze maze={DEFAULT_MAZE} />)).toBe(true);
  });
});
