import React from 'react';
import styled from 'styled-components';

import { Tile } from 'src/shared';

const StyledSpace = Tile.extend``;

const Space = () => <StyledSpace data-testid="Space" />;

export default Space;
