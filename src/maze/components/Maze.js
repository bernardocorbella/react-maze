import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Row from './Row';

const Maze = ({ maze }) => {
  return (
    <div data-testid="Maze">
      {maze.map((str, idx) => <Row str={str} key={idx} />)}
    </div>
  );
};

Maze.defaultProps = {
  maze: []
};

Maze.propTypes = {
  maze: PropTypes.array
};

export default Maze;
