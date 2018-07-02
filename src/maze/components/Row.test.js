import React from 'react';
import { shallow } from 'enzyme';

import Bush from './Bush';
import Player from './Player';
import Row from './Row';
import Space from './Space';

describe('<Row />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Row />);
  });

  it('renders no problem', () => {
    expect(wrapper.is('[data-testid="Row"]')).toBe(true);
  });

  it('renders an array as static elements', () => {
    wrapper.setProps({ row: ['#', ' ', 'p'] });

    expect(wrapper.contains([<Bush />, <Space />, <Player />])).toBe(true);
  });
});
