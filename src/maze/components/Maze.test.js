import React from 'react';
import { shallow } from 'enzyme';

import Maze from './Maze';
import Row from './Row';

describe('<Maze />', () => {
  let wrapper = {};

  beforeEach(() => {
    wrapper = shallow(<Maze />);
  });

  it('renders a maze component', () => {
    expect(wrapper.is('[data-testid="Maze"]')).toBe(true);
  });

  it('renders maze rows', () => {
    wrapper.setProps({ maze: ['####', '####'] });

    expect(wrapper.children().length).toEqual(2);
  });
});
