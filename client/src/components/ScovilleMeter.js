import React, { Component } from 'react';
import injectSheet from 'react-jss';

const style = {
  meter: {
    backgroundColor: 'red',
    width: '200px',
    height: '200px',
  },
};

class ScovilleMeter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.meter}>
        <h1>Scoville Meter</h1>
      </div>
    );
  }
}

export default injectSheet(style)(ScovilleMeter);
