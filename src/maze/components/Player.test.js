import React from 'react';
import { shallow } from 'enzyme';

import Player from './Player';

describe('<Player />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Player />);
  });

  it('renders no problem', () => {
    expect(wrapper.is('[data-testid="Player"]')).toBe(true);
  });
});
