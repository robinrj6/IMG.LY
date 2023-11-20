import React from 'react';

import classNames from 'classnames';

import classes from './style.module.scss';

type Props = React.ComponentPropsWithoutRef<'a'>;

export const FooterLink: React.FC<Props> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <a {...rest} className={classNames(className, classes.root)}>
      {children}
    </a>
  );
};
