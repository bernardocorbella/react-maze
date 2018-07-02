import React from 'react';
import { shallow } from 'enzyme';

import { Maze } from '../../maze';
import App from './App';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.is('[data-testid="App"]')).toBe(true);
    expect(wrapper.contains(<Maze />)).toBe(true);
  });
});
