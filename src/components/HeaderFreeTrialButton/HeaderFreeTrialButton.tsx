import React from 'react';

import { Links } from '../../utils/constants';
import { Button, ButtonProps } from '../Button';
import { ListItem } from '../ListItem';

export const HeaderFreeTrialButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <ListItem>
      <Button
        {...props}
        render={<a />}
        href={Links.FreeTrial.url}
        data-analytics={`${Links.FreeTrial.analyticsID}, {"props": {"source": "/nav"}}`}
      >
        {Links.FreeTrial.name}
      </Button>
    </ListItem>
  );
};
