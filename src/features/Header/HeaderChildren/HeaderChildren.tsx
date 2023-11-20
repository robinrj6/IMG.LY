import React from 'react';

import classNames from 'classnames';

import { HeaderBlogButton } from '../../../components/HeaderBlogButton';
import { HeaderContactSalesButton } from '../../../components/HeaderContactSalesButton';
import { HeaderFreeTrialButton } from '../../../components/HeaderFreeTrialButton';
import { HeaderPricingButton } from '../../../components/HeaderPricingButton';
import { Docs } from '../Docs';
import { Products } from '../Products';
import { Solutions } from '../Solutions';

import classes from './style.module.scss';

interface Props {
  small?: boolean;
}

/**
 * Children of HeaderContainer used in Header.
 */
export const HeaderChildren: React.FC<Props> = ({ small }) => {
  return (
    <>
      <div className={classes.menu}>
        <Products buttonClassName="IMGLY__Header_Item" small={small} />
        <Solutions buttonClassName="IMGLY__Header_Item" small={small} />
        <Docs buttonClassName="IMGLY__Header_Item" small={small} />
        <HeaderPricingButton className="IMGLY__Header_Item" small={small} />
        <HeaderBlogButton
          className={classNames(classes.menu__blog, 'IMGLY__Header_Item')}
          small={small}
        />
      </div>
      <div className={classes.buttons}>
        <HeaderContactSalesButton
          className="IMGLY__Header_Item"
          small={small}
        />
        <HeaderFreeTrialButton className="IMGLY__Header_Item" small={small} />
      </div>
    </>
  );
};
