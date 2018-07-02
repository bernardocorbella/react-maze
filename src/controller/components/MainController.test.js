import React from 'react';
import { mount } from 'enzyme';

import MainController from './MainController';

describe('<MainController />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<MainController />);
  });

  it('renders correctly ', () => {
    mount(<MainController />);
  });
});
