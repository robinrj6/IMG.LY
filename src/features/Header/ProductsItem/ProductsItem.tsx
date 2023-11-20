import React, { forwardRef, ComponentPropsWithoutRef } from 'react';

import classNames from 'classnames';

import { ReactComponent as ArrowForward } from '../../../assets/images/navigation-icon-trailing.svg';
import { ListItem } from '../../../components/ListItem';
import { Product } from '../../../types';

import classes from './style.module.scss';

interface Props extends ComponentPropsWithoutRef<'a'> {
  name: string;
  description: string;
  url: string;
  product: Product;
}

const ProductsItem = forwardRef<HTMLAnchorElement, Props>(
  ({ name, description, url, product, className, children, ...props }, ref) => {
    return (
      <ListItem className={className}>
        <a
          {...props}
          ref={ref}
          className={classNames(classes.root, classes[`root__is_${product}`])}
          href={url}
        >
          <div className={classes.overline}>
            <div
              className={classNames(classes.tag, classes[`tag__is_${product}`])}
            />
            <div className={classes.overline__text}>
              <ArrowForward className={classes.overline__icon} />
            </div>
          </div>
          {/*
            note: Added a space behind the name for SEO reasons.
            Else there wouldn't be a space between both lines in the anchor name. 
          */}
          <div className={classNames(classes.name)}>{name} </div>
          <span className={classes.description}>{description}</span>
          {children}
        </a>
      </ListItem>
    );
  },
);

ProductsItem.displayName = 'ProductsItem';

export { ProductsItem };
