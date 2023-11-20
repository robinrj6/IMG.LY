import React, { ComponentPropsWithoutRef } from 'react';

import classNames from 'classnames';

import { ListItem } from '../../../components/ListItem';

import classes from './style.module.scss';

interface Props extends ComponentPropsWithoutRef<'a'> {
  name: string;
  url: string;
  description: string;
  image: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

export const SolutionsItem: React.FC<Props> = ({
  name,
  description,
  url,
  image: IconImage,
  className,
  ...props
}) => {
  return (
    <ListItem>
      <a {...props} className={classNames(className, classes.root)} href={url}>
        <IconImage className={classes.image} />
        {/*
          note: Added a space behind the name for SEO reasons.
          Else there wouldn't be a space between both lines in the anchor name. 
        */}
        <div className={classes.name}>{name} </div>
        <span className={classes.description}>{description}</span>
      </a>
    </ListItem>
  );
};
