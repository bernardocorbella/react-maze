import React from 'react';

import { GameContext } from 'src/app';
import { Tile } from 'src/shared';

const rotationByDirection = {
  up: '180deg',
  down: '0deg',
  right: '-90deg',
  left: '90deg'
};

const StyledPlayer = Tile.extend`
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4xNzEgNTEyLjE3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjE3MSA1MTIuMTcxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3OS4wNDYsMjgzLjkyNWMtMS42NjQtMy45ODktNS41NDctNi41OTItOS44NTYtNi41OTJIMzUyLjMwNVYxMC42NjdDMzUyLjMwNSw0Ljc3OSwzNDcuNTI2LDAsMzQxLjYzOCwwSDE3MC45NzEgICAgYy01Ljg4OCwwLTEwLjY2Nyw0Ljc3OS0xMC42NjcsMTAuNjY3djI2Ni42NjdINDIuOTcxYy00LjMwOSwwLTguMTkyLDIuNjAzLTkuODU2LDYuNTcxYy0xLjY0MywzLjk4OS0wLjc0Nyw4LjU3NiwyLjMwNCwxMS42MjcgICAgbDIxMi44LDIxMy41MDRjMi4wMDUsMi4wMDUsNC43MTUsMy4xMzYsNy41NTIsMy4xMzZzNS41NDctMS4xMzEsNy41NTItMy4xMTVsMjEzLjQxOS0yMTMuNTA0ICAgIEM0NzkuNzkzLDI5Mi41MDEsNDgwLjcxLDI4Ny45MTUsNDc5LjA0NiwyODMuOTI1eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: center;
  transform: rotate(${props => rotationByDirection[props.direction]});
`;

const Player = props => {
  return (
    <GameContext.Consumer>
      {context => (
        <StyledPlayer data-testid="Player" direction={context.lastDirection} />
      )}
    </GameContext.Consumer>
  );
};

export default Player;
