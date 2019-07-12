import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Pepper from '../images/pepper.svg';
import fire from '../images/fire.svg';

const style = {
  meter: {
    position: 'relative',
    width: '20%',
  },
  level: {
    position: 'absolute',
    width: '100%',
    height: 'auto',
  },
};

const levels = [];
for (let i = 1; i <= 11; i++) {
  const image = require(`../images/${i.toString().padStart(2, '0')}.svg`);
  levels.push(image);
}
levels.push(fire);

class ScovilleMeter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.meter}>
        <img className={classes.level} src={Pepper} alt="pepperoni" />
        {levels.map(level => (
          <img className={classes.level} src={level} alt="what" key={level} />
        ))}
      </div>
    );
  }
}

export default injectSheet(style)(ScovilleMeter);
