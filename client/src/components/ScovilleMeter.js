import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Pepper from '../images/pepper.svg';
import level_01 from '../images/01.svg';
import level_02 from '../images/02.svg';
import level_03 from '../images/03.svg';
import level_04 from '../images/04.svg';
import level_05 from '../images/05.svg';
import level_06 from '../images/06.svg';
import level_07 from '../images/07.svg';
import level_08 from '../images/08.svg';
import level_09 from '../images/09.svg';
import level_10 from '../images/10.svg';
import level_11 from '../images/11.svg';
import fire from '../images/fire.svg';

const style = {
  meter: {
    backgroundColor: 'red',
    width: '200px',
    height: '200px',
  },
};

const levels = [
  level_01,
  level_02,
  level_03,
  level_04,
  level_05,
  level_06,
  level_07,
  level_08,
  level_09,
  level_10,
  level_11,
  fire,
];

class ScovilleMeter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.meter}>
        <img src={Pepper} alt="pepperoni" />
        {levels.map(level => (
          <img src={level} alt="what" key={level} />
        ))}
      </div>
    );
  }
}

export default injectSheet(style)(ScovilleMeter);
