import React from 'react';
import { shallow } from 'enzyme';

import Player from './Player';

describe('<Player />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Player />);
  });

  it('renders no problem', () => {
    // Commenting because of: https://github.com/airbnb/enzyme/issues/1509
    // expect(wrapper.find('[data-testid="Player"]').length).toBeTruthy();
  });
});
