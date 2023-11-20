import React from 'react';

import classNames from 'classnames';

import { Links } from '../../utils/constants';
import { ListItem } from '../ListItem';

import classes from './style.module.scss';

interface Props {
  className?: string;
}

export const HeaderCareers: React.FC<Props> = ({ className, ...props }) => {
  return (
    <ListItem>
      <a
        {...props}
        className={classNames(className, classes.root, 'IMGLY__Header_Careers')}
        href={Links.Careers.url}
      >
        Remote works! Join us.
      </a>
    </ListItem>
  );
};
