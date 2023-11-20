import React from 'react';

import classes from './style.module.scss';

export const ColorPalette: React.FC = ({ children }) => {
  return <div className={classes.root}>{children}</div>;
};
