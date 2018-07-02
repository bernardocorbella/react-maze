import React from 'react';
import { shallow } from 'enzyme';

import Maze from './Maze';

describe('<Maze />', () => {
  let wrapper = {};

  beforeEach(() => {
    wrapper = shallow(<Maze />);
  });

  it('renders a maze component', () => {
    expect(wrapper.is('[data-testid="Maze"]')).toBe(true);
  });
});
