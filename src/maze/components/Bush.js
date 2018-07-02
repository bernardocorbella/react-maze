import React from 'react';
import styled from 'styled-components';

import { Tile } from 'src/shared';

const StyledBush = Tile.extend`
  background: repeating-linear-gradient(
    45deg,
    #cccccc,
    #cccccc 0.25%,
    #ffffff 0.25%,
    #ffffff 0.5%
  );
  background-attachment: fixed;
`;

const Bush = () => <StyledBush data-testid="Bush" />;

export default Bush;
