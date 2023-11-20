import React from 'react';

import { Links } from '../../utils/constants';
import { Button, ButtonProps, ButtonTheme } from '../Button';
import { ListItem } from '../ListItem';

export const HeaderPricingButton: React.FC<ButtonProps> = ({
  theme = ButtonTheme.Text,
  ...props
}) => {
  return (
    <ListItem>
      <Button
        {...props}
        render={<a />}
        href={Links.Pricing.url}
        data-analytics={`${Links.Pricing.analyticsID}, {"props": {"source": "/nav"}}`}
        theme={theme}
      >
        {Links.Pricing.name}
      </Button>
    </ListItem>
  );
};
