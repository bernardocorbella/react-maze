import React, { Component } from 'react';

class MainController extends Component {
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyDown', this.onKeyDown);
  }

  onKeyDown = ({ code }) => {
    const { handleMove } = this.props;

    switch (code) {
      case 'ArrowUp':
        return handleMove('up');
      case 'ArrowDown':
        return handleMove('down');
      case 'ArrowLeft':
        return handleMove('left');
      case 'ArrowRight':
        return handleMove('right');
      default:
        break;
    }
  };

  render() {
    return (
      <div data-testid="MainController" onKeyDown={this.onKeyDown}>
        {this.props.children}
      </div>
    );
  }
}

export default MainController;
