import React from 'react';

import { Links } from '../../utils/constants';
import { ButtonTheme, Button, ButtonProps } from '../Button';
import { ListItem } from '../ListItem';

export const HeaderContactSalesButton: React.FC<ButtonProps> = ({
  theme = ButtonTheme.Text,
  ...props
}) => {
  return (
    <ListItem>
      <Button
        {...props}
        render={<a />}
        href={Links.ContactSales.url}
        theme={theme}
        data-analytics={`${Links.ContactSales.analyticsID}, {"props": {"source": "/nav"}}`}
      >
        {Links.ContactSales.name}
      </Button>
    </ListItem>
  );
};
