import React from 'react';

import classNames from 'classnames';

import { ReactComponent as Imgly } from '../../assets/images/IMG_LY.svg';
import { Links } from '../../utils/constants';

import classes from './style.module.scss';

interface Props {
  small?: boolean;
  className?: string;
}

export const HeaderLogo: React.FC<Props> = ({ small, className, ...props }) => {
  return (
    <a
      {...props}
      className={classNames(
        className,
        classes.root,
        { [classes.root__is_small]: small },
        'IMGLY__header_logo',
      )}
      href={Links.IMGLY.url}
      aria-label="Go to the main IMGLY page"
    >
      <Imgly aria-label="IMGLY Logo" />
    </a>
  );
};
