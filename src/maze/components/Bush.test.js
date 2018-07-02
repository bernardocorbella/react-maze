import React from 'react';
import { shallow } from 'enzyme';

import Bush from './Bush';

describe('<Bush />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Bush />);
  });

  it('renders no problem', () => {
    expect(wrapper.is('[data-testid="Bush"]')).toBe(true);
  });
});
