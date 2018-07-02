import React from 'react';
import PropTypes from 'prop-types';
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
    return <Player key={i} />;
  }
};

const Row = ({ row }) => (
  <StyledRow data-testid="Row">{row.map(selectComponent)}</StyledRow>
);

Row.defaultProps = {
  row: []
};

Row.propTypes = {
  row: PropTypes.array
};

export default Row;
