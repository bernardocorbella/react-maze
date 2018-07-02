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

  it('renders a string as static elements', () => {
    wrapper.setProps({ str: '## #' });

    expect(wrapper.contains([<Bush />, <Bush />, <Space />, <Bush />])).toBe(
      true
    );
  });

  it('renders all instances of player', () => {
    wrapper.setProps({ str: 'v' });
    expect(wrapper.contains(<Player char="v" />)).toBe(true);

    wrapper.setProps({ str: '>' });
    expect(wrapper.contains(<Player char=">" />)).toBe(true);

    wrapper.setProps({ str: '^' });
    expect(wrapper.contains(<Player char="^" />)).toBe(true);

    wrapper.setProps({ str: '<' });
    expect(wrapper.contains(<Player char="<" />)).toBe(true);
  });
});
