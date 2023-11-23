import React from 'react';

import { ButtonTheme } from '../../../components/Button';
import { HeaderBlogButton } from '../../../components/HeaderBlogButton';
import { HeaderContactSalesButton } from '../../../components/HeaderContactSalesButton';
import { HeaderFreeTrialButton } from '../../../components/HeaderFreeTrialButton';
import { HeaderPricingButton } from '../../../components/HeaderPricingButton';
import { Docs } from '../Docs';
import { Products } from '../Products';
import { Solutions } from '../Solutions';

import classes from './style.module.scss';
import { Resources } from '../Resources';

/**
 * Children of HeaderMenu used in Header.
 */
export const HeaderMenuChildren: React.FC = () => {
  return (
    <>
      <div className={classes.menu}>
        <Products />
        <Solutions />
        <Docs />
        <HeaderPricingButton className={classes.menu__item} />
        {/* <HeaderBlogButton className={classes.menu__item} /> */}
        <Resources/>
      </div>
      <div className={classes.buttons}>
        <HeaderContactSalesButton
          className={classes.buttons__button}
          theme={ButtonTheme.Secondary}
        />
        <HeaderFreeTrialButton className={classes.buttons__button} />
      </div>
    </>
  );
};
