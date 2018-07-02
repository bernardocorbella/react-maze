import React from 'react';

import { Bush, Space } from 'src/maze';

const Row = ({ str }) => (
  <div data-testid="Row">
    {str
      .split('')
      .map((tile, i) => (tile === '#' ? <Bush key={i} /> : <Space key={i} />))}
  </div>
);

Row.defaultProps = {
  str: ''
};

export default Row;
