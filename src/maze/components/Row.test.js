import React from 'react';
import { shallow } from 'enzyme';

import Bush from './Bush';
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

  it('renders a string as elements', () => {
    wrapper.setProps({ str: '## #' });

    expect(wrapper.children().length).toEqual(4);
    expect(wrapper.contains([<Bush />, <Bush />, <Space />, <Bush />])).toBe(
      true
    );
  });
});
