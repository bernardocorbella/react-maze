import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Row from './Row';

const StyledMaze = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`;

const Maze = ({ maze }) => {
  return (
    <StyledMaze data-testid="Maze">
      {maze.map((row, idx) => <Row row={row} key={idx} />)}
    </StyledMaze>
  );
};

Maze.defaultProps = {
  maze: []
};

Maze.propTypes = {
  maze: PropTypes.array,
  lastDirection: PropTypes.string
};

export default Maze;
