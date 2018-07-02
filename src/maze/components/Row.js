import React from 'react';
import styled from 'styled-components';

import { Bush, Space } from 'src/maze';

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  flex: 1 0 auto;
`;

const Row = ({ str }) => (
  <StyledRow data-testid="Row">
    {str
      .split('')
      .map((tile, i) => (tile === '#' ? <Bush key={i} /> : <Space key={i} />))}
  </StyledRow>
);

Row.defaultProps = {
  str: ''
};

export default Row;
