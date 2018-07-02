import React from 'react';
import styled from 'styled-components';

import { Bush, Space, Player } from 'src/maze';

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  flex: 1 0 auto;
`;

const selectComponent = (char, i) => {
  if (char === '#') {
    return <Bush key={i} />;
  } else if (char === ' ') {
    return <Space key={i} />;
  } else {
    return <Player char={char} key={i} />;
  }
};

const Row = ({ str }) => (
  <StyledRow data-testid="Row">
    {str && str.split('').map(selectComponent)}
  </StyledRow>
);

Row.defaultProps = {
  str: ''
};

export default Row;
