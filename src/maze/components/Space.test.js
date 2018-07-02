import React from 'react';
import { shallow } from 'enzyme';

import Space from './Space';

describe('<Space />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Space />);
  });

  it('renders no problem', () => {
    expect(wrapper.is('[data-testid="Space"]')).toBe(true);
  });
});
