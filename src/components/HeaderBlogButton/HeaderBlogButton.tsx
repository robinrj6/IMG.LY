import React from 'react';
import { Links } from '../../utils/constants';
import { Button, ButtonProps, ButtonTheme } from '../Button';
import { ListItem } from '../ListItem';

export const HeaderBlogButton: React.FC<ButtonProps> = ({
  theme = ButtonTheme.Text,
  ...props
}) => {
  return (
    <ListItem>
      <Button {...props} render={<a />} href={Links.Blog.url} theme={theme}>
        {Links.Blog.name}
      </Button>
    </ListItem>
  );
};
